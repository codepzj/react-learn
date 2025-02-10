function Index() {
  return (
    <div className="flex flex-col justify-center items-center p-4 h-full">
      <h1 className="text-3xl font-bold mb-4">配套视频</h1>
      <p className="text-lg text-center mb-4">
        【黑马程序员前端React18入门到实战视频教程，从react+hooks核心基础到企业级项目开发实战（B站评论、极客园项目等）及大厂面试全通关】
      </p>

      <a
        href="https://www.bilibili.com/video/BV1ZB4y1Z7o8?vd_source=717e5631051a8339c2eea7fb70959d5b"
        className="text-blue-500 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        点击观看视频
      </a>
      <div>
        视频当中有些库已经过时，当前项目使用的React19，React
        RouterV7，tailwindcss3.4.17，如有需要请自行安装
      </div>
    </div>
  );
}

export default Index;
