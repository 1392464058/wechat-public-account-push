/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7014abf5c160792b',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'f0c6ecc3d3761abca650ddaad334b710',

  PROVINCE: '重庆',
  CITY: '重庆',

  USERS: [
    {
      // 想要发送的人的名字
      name: '十九',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oy5cI6EfYN_VV95Ug3aOcLnL8irQ',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '0AQQCqVFRgEiQzxvrPCQ6buJr4qwmCaD1-RgOHlbj0o',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-26',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '十九', year: '2000', date: '11-26',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
       
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
     
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oy5cI6EfYN_VV95Ug3aOcLnL8irQ',
    }
  ],

}

module.exports = USER_CONFIG

