package com.xzw.weexdemo;

import android.widget.Toast;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

/**
 * Created by zhenwang.xiang on 2018/5/3.
 * Description:
 */

public class MyModule extends WXModule {
    //run ui thread
    @JSMethod(uiThread = true)
    public void printLog(String msg) {
        Toast.makeText(mWXSDKInstance.getContext(), msg, Toast.LENGTH_SHORT).show();
    }

    @JSMethod(uiThread = true)
    public void printDoubleLog() {
        Toast.makeText(mWXSDKInstance.getContext(), "拦截之后，我自己弹出的Toast", Toast.LENGTH_SHORT).show();
    }

}
