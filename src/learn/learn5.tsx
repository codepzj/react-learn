import React from "react";
import { fetchGoods } from "@/api/carts";

import type { Goods } from "@/api/types";

interface GoodsListState {
  goods: Goods[];
}

class Learn5 extends React.Component<any, GoodsListState> {
  constructor(props: any) {
    super(props);
    this.state = {
      goods: [],
    };
  }

  render(): React.ReactNode {
    return (
      <div>
        <div>
          【前端面试题，react生命周期】https://www.bilibili.com/video/BV1mj411E7NC?vd_source=717e5631051a8339c2eea7fb70959d5b
        </div>
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">商品列表</h1>
          <table className="min-w-full bg-white border border-gray-300 text-center">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-2 px-4 border-b">id</th>
                <th className="py-2 px-4 border-b">商品名称</th>
                <th className="py-2 px-4 border-b">商品价格</th>
              </tr>
            </thead>
            <tbody>
              {this.state.goods.map((good) => (
                <tr key={good.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{good.id}</td>
                  <td className="py-2 px-4 border-b">{good.name}</td>
                  <td className="py-2 px-4 border-b">{good.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  async componentDidMount(): Promise<void> {
    const goodsData = await fetchGoods();
    this.setState({ goods: goodsData });
  }

  shouldComponentUpdate(): boolean {
    return true; // 允许更新
    // return false; // 禁止更新
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>): void {
    console.log("更新");
  }

  componentWillUnmount(): void {
    console.log("注销");
  }
}

export default Learn5;
