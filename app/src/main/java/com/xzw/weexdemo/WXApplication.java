package com.xzw.weexdemo;

import android.app.Application;

import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

/**
 * Created by zhenwang.xiang on 2018/4/28.
 * Description:
 */

public class WXApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
        InitConfig config = new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build();
        WXSDKEngine.initialize(this, config);
        try {
            WXSDKEngine.registerModule("MyModule", MyModule.class);
            WXSDKEngine.registerComponent("richText", RichText.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
    }
}
