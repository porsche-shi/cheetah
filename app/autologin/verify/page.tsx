'use client'

import {useSearchParams} from "next/navigation";
import {Suspense} from "react";

function Code() {
    const params = useSearchParams()
    const code = params.get('code')
    const state = params.get('state')
    return <div>code = {code}, state = {state}</div>

}
export default function Page() {
    return (
        <Suspense>
            <Code />
        </Suspense>
    )
};