/**
 *  PostCSS 的配置文件
 *  PostCSS 是基于 Node.js 运行的一个处理 CSS 的工具
 *  所以它的配置文件也是运行在 Node.js 中
 */

// PostCSS 配置文件需要导出一个对象
module.exports = {
  plugins: {
    // 自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    // VueCLI 已经在内部默认配置了 autoprefixer
    autoprefixer: {
      // browsers 用来配置要兼容到的系统(浏览器)环境，这个配置没有问题，但是写到这里会在控制台编译警告
      // 原因：因为 VueCLI 是通过项目中的 .browserlistrc 文件来配置要兼容的环境信息
      // browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    // 把 px 转为 rem
    'postcss-pxtorem': {
      // 转换的根元素基准值：
      // 正常情况下按照设计稿来，比如宽750px => 750/10=75,宽375px => 375/10=37.5
      // 移动端页面一般都是以 iPhone6/7/8 为原型设计的
      // Vant组件库是基于逻辑像素 375 写的
      // 设计稿都是基于物理像素 750宽设计的，所以设计稿中测量多少就写多少
      // 适配：让你的测量单位/2
      // 方法：不用计算的方案：设计稿工具PS/XD
      rootValue: 37.5,

      // 需要转换的 CSS 属性：星号 * 表示所有属性都要转换
      propList: ['*']
    }
  }
}
