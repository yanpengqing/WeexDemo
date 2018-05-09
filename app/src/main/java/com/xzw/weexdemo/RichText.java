package com.xzw.weexdemo;

import android.content.Context;
import android.graphics.Color;
import android.support.annotation.NonNull;
import android.widget.TextView;

import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.dom.WXDomObject;
import com.taobao.weex.ui.component.WXComponent;
import com.taobao.weex.ui.component.WXComponentProp;
import com.taobao.weex.ui.component.WXVContainer;

/**
 * Created by zhenwang.xiang on 2018/5/4.
 * Description:
 */

public class RichText extends WXComponent<TextView> {
    public RichText(WXSDKInstance instance, WXDomObject dom, WXVContainer parent) {
        super(instance, dom, parent);
    }

    @Override
    protected TextView initComponentHostView(@NonNull Context context) {
        TextView textView = new TextView(context);
        textView.setTextSize(22);
        textView.setTextColor(Color.BLUE);
        return textView;
    }

    @WXComponentProp(name = "tel")
    public void setTel(String telNumber) {
        getHostView().setText("电话号码:" + telNumber);
    }

    @WXComponentProp(name = "textcolor")
    public void setColor(String color) {
        getHostView().setTextColor(Color.parseColor(color));
    }
}
