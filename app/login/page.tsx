"use client"
// import {ArrowRightIcon} from "@nextui-org/shared-icons";
import * as ww from "@wecom/jssdk"
import {WWLoginLangType, WWLoginPanelSizeType, WWLoginRedirectType, WWLoginType} from "@wecom/jssdk"
import {useEffect} from "react";

export default function Login() {
    useEffect(()=>{
        const wwLogin = ww.createWWLoginPanel({
            el: "#ww_login",
            params: {
                login_type: WWLoginType.corpApp,
                appid: "wwdf51420bb8d44d91",
                agentid: "1000003",
                redirect_uri: "https://cheetah.tntlinking.com/",
                state: "loginState",
                redirect_type: WWLoginRedirectType.top,
                panel_size: WWLoginPanelSizeType.middle,
                lang: WWLoginLangType.zh
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
        <div className="flex items-center justify-center min-h-screen">
            <div id="ww_login"></div>
        </div>
    )
    // return wwLogin
}