export default async function WWLogin() {
    const url = "https://login.work.weixin.qq.com/wwlogin/sso/login/?login_type=CorpApp&appid=wwdf51420bb8d44d91&redirect_uri=http%3A%2F%2Fcheetah.tntlinking.com&state=STATE&agentid=1000003"
    // useEffect(() => {
    //     fetch(url).then(response => response.text()).then(text => {
    //         setContent(text);
    //     });
    // }, []);

    const resp = await fetch(url)
    const text = await resp.text()

    return (
        <div dangerouslySetInnerHTML={{__html: text}}></div>
    )
};