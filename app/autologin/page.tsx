'use server'
import {redirect} from "next/navigation";

export default async function AutoLogin() {
    const appid=`wwdf51420bb8d44d91`
    const agent_id = '1000003'
    const redirect_uri = encodeURIComponent('https://cheetah.tntlinking.com')
    const response_type = 'code'
    const scope = 'snsapi_base'
    // const scope = 'snsapi_privateinfo'
    const state = 'cheetah-web'

    redirect(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&state=${state}&agentid=${agent_id}#wechat_redirect`)
};