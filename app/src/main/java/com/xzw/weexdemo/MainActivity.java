package com.xzw.weexdemo;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private Intent mIntent;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        findViewById(R.id.btn_local).setOnClickListener(this);
        findViewById(R.id.btn_network).setOnClickListener(this);
        findViewById(R.id.btn_module).setOnClickListener(this);
        findViewById(R.id.btn_component).setOnClickListener(this);
        findViewById(R.id.btn_slider).setOnClickListener(this);

    }

    @Override
    public void onClick(View v) {
        mIntent = new Intent(MainActivity.this, WeexPageActivity.class);
        switch (v.getId()) {
            case R.id.btn_local:
                mIntent.putExtra("type", 0);
                break;
            case R.id.btn_network:
                mIntent.putExtra("type", 1);
                break;
            case R.id.btn_module:
                mIntent.putExtra("type", 2);
                break;
            case R.id.btn_component:
                mIntent.putExtra("type", 3);
                break;
            case R.id.btn_slider:
                mIntent.putExtra("type", 4);
                break;
            default:
                break;
        }
        startActivity(mIntent);
    }
}
