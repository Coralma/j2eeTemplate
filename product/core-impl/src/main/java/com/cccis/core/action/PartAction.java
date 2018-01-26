package com.cccis.core.action;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by CCC on 2016/10/25.
 */
@Controller
@RequestMapping("/part")
public class PartAction {

    private static String key = "29";

    public PartAction() {
    }

    @RequestMapping(value = "/apply", method = RequestMethod.GET)
    public @ResponseBody
    String apply(@RequestParam final Integer number) {
        return "Take parameter with the number : " + number;
    }

}