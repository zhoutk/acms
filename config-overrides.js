const rewireTypescript = require('react-app-rewire-typescript');

module.exports = function override(config, env) {
    config = rewireTypescript(config, env);
    config.resolve.alias = Object.assign({}, (config.resolve.alias || {}), {
        'react': 'anujs',
        'react-dom': 'anujs',
        // 若要兼容 IE 请使用以下配置
        // 'react': 'anujs/dist/ReactIE',
        // 'react-dom': 'anujs/dist/ReactIE',

        // 如果引用了 prop-types 或 create-react-class
        // 需要添加如下别名
        'prop-types': 'anujs/lib/ReactPropTypes',
        'create-react-class': 'anujs/lib/createClass',
        //如果你在移动端用到了onTouchTap事件
        'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin',
    })
    return config;
}