package com.xzw.weexdemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.taobao.weex.utils.WXFileUtils;

public class WeexPageActivity extends AppCompatActivity implements IWXRenderListener {

    WXSDKInstance mWxsdkInstance;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_weex_page);

        mWxsdkInstance = new WXSDKInstance(this);
        mWxsdkInstance.registerRenderListener(this);
        Intent intent = getIntent();
        int type = intent.getIntExtra("type", -1);
        switch (type) {
            case 0:
                /**
                 * WXSample 可以替换成自定义的字符串，针对埋点有效。
                 * template 是.vue 转化后的 js文件。
                 * option 可以为空，或者通过option传入 js需要的参数。例如bundle js的地址等。
                 * jsonInitData 可以为空。
                 */
                mWxsdkInstance.render("WXSample", WXFileUtils.loadAsset("local.js", this), null, null, WXRenderStrategy.APPEND_ASYNC);
                break;
            case 1:
//                mWxsdkInstance.render("WXSample", WXFileUtils.loadAsset("network.js", this), null, null, WXRenderStrategy.APPEND_ASYNC);
                //从网络加载
                mWxsdkInstance.renderByUrl("WXSample", "http://192.168.72.65:8081/dist/index.js", null, null, WXRenderStrategy.APPEND_ASYNC);
                break;
            case 2:
                mWxsdkInstance.render("WXSample", WXFileUtils.loadAsset("module.js", this), null, null, WXRenderStrategy.APPEND_ASYNC);
                break;
            case 3:
                mWxsdkInstance.render("WXSample", WXFileUtils.loadAsset("componet.js", this), null, null, WXRenderStrategy.APPEND_ASYNC);
//                mWxsdkInstance.renderByUrl("WXSample", "http://192.168.72.65:8081/dist/index.js", null, null, WXRenderStrategy.APPEND_ASYNC);
                break;
            case 4:
                mWxsdkInstance.render("WXSample", WXFileUtils.loadAsset("slider.js", this), null, null, WXRenderStrategy.APPEND_ASYNC);
//                mWxsdkInstance.renderByUrl("WXSample", "http://192.168.72.65:8081/dist/index.js", null, null, WXRenderStrategy.APPEND_ASYNC);
                break;
            default:
                break;
        }

    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (view == null) {
            return;
        }
        setContentView(view);
    }

    @Override
    public void onRenderSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onRefreshSuccess(WXSDKInstance instance, int width, int height) {

    }

    @Override
    public void onException(WXSDKInstance instance, String errCode, String msg) {
        Log.i("XZW", errCode + "msg:" + msg);
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWxsdkInstance != null) {
            mWxsdkInstance.onActivityDestroy();
        }
    }
}
