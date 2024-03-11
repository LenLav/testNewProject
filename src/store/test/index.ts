import { defineStore } from "pinia"
import { ref } from "vue"
import { AxiosResponse } from "axios"
import { instanceName } from "@/axios"
import { IPost } from "@/store/test/interfaces"

export const useTestStore = defineStore('test', () => {
  const postList = ref([] as IPost[])

  async function getPostList(body?: {
    userId: number[]
  }) {
    try {
      const response: AxiosResponse<IPost[]> = await instanceName.get("/posts", {params: body});
      postList.value = response?.data
      return response?.data
    } catch (error) {
      console.error(error);
    }
  }

  return { 
    postList,
    getPostList
  }
})