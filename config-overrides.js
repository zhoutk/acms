/* config-overrides.js */
const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    const tsLoader = getLoader(
        config.module.rules,
        rule =>
            rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader')
    );

    tsLoader.options = {
        getCustomTransformers: () => ({
            before: [ tsImportPluginFactory({
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true,
            }) ]
        })
    };

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

    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#1DA57A" },
    })(config, env);

    return config;
};