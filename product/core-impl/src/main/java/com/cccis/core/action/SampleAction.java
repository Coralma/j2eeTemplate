package com.cccis.core.action;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

/**
 * Created by ccc on 2018/1/17.
 */
@Controller
@RequestMapping(value = "/sample")
public class SampleAction {

    @RequestMapping(value = "/hello")
    public @ResponseBody String getObjectById() {
        return "Hello World! The project is running!";
    }
}
