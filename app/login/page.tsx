import {strict} from "node:assert";
'use client'

import Link from "next/link";
// import {ArrowRightIcon} from "@nextui-org/shared-icons";
import {ArrowRightIcon} from '@heroicons/react/24/outline';
import {Card, CardBody, CardHeader} from "@nextui-org/card";
import * as ww from "@wecom/jssdk"
import {useEffect} from "react";

export default function Login() {
    useEffect(()=>{
        const wwLogin = ww.createWWLoginPanel({
            el: "#ww_login",
            params: {
                login_type: "corpApp",
                appid: "wwdf51420bb8d44d91",
                agentid: "1000003",
                redirect_url: "http://shibaoxu.xyz",
                state: "loginState",
                redirect_type: "callback",
                panel_size: "small",
                lang: "zh"
            },
            // onCheckWeComLogin({isWeComLogin}) {
            //     console.log(isWeComLogin)
            // },
            onLoginSuccess({code}) {
                console.log(code)
            },
            onLoginFail(err) {
                console.log(err)
            },
        });
    })
    return (
        <div id='ww_login' className="flex items-center justify-center min-h-screen">
            {/*<Card className="md:min-w-[600px]">*/}
            {/*    <CardHeader>Cheetah</CardHeader>*/}
            {/*    <CardBody>*/}
            {/*        <p>请使用企业微信APP扫描以下二维码进行登录</p>*/}
            {/*    </CardBody>*/}
            {/*</Card>*/}
        </div>
    )
    // return wwLogin
}