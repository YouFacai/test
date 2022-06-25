package com.example.demo.controller;

import com.example.demo.service.impl.createOssimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@CrossOrigin
public class OssController {

    @Autowired
    public com.example.demo.service.impl.createOssimpl createOssimpl;

    @Autowired
    public com.example.demo.service.impl.updateFileimpl updateFileimpl;

    // 创建一个容器
    @GetMapping("/createOss")
    public String getOss() {
        createOssimpl.createOss();
        return "创建一个容器";
    }

    // 存储上传过来的文件
    @PostMapping("/updateFile")
    public String updateFile(@RequestPart("data") MultipartFile[] mfs) {
        for(MultipartFile mf:mfs){
            updateFileimpl.updateFile(mf);
        }
        return "存储上传过来的文件";
    }
}
