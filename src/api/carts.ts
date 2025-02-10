import axios from "axios";
import type { Goods } from "./types";
// 获取商品列表的请求函数
export const fetchGoods = async (): Promise<Goods[]> => {
  try {
    const response = await axios.get("/goods.json");
    return response.data;
  } catch (error) {
    console.error("获取商品列表失败:", error);
    throw error;
  }
};
