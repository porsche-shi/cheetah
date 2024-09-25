'use server'

import {useSearchParams} from "next/navigation";
import {Suspense} from "react";

// function Code() {
//     const params = useSearchParams()
//     const code = params.get('code')
//     const state = params.get('state')
//     return <div>code = {code}, state = {state}</div>
//
// }
// export default function Page() {
//     return (
//         <Suspense>
//             <Code />
//         </Suspense>
//     )
// };

export default async function Page({searchParams}: { searchParams: any }) {
    return (
        <div>查询参数是: {searchParams}</div>
    )
};