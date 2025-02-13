export default function Page() {
  const list = [
    {
      电器: [
        {
          电视: "120",
          电脑: "1200",
          电冰箱: "130",
        },
      ],
    },
    {
      用品: [
        {
          日用品: "120",
          月用品: "1200",
          年用品: "130",
        },
      ],
    },
  ];

  return (
    <>
      {list.map((item, itemIndex) => {
        return (
          <div key={itemIndex}>
            {Object.keys(item).map((goodType, goodTypeIndex) => {
              const goodList = item[goodType][0];
              return (
                <div key={goodTypeIndex}>
                  <div>分类：{goodType}</div>
                  <div>
                    {Object.entries(goodList).map(([goodIndex, good]) => {
                      return (
                        <div key={goodIndex}>
                          商品名称：{goodIndex}--{good}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
}
