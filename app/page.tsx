import Image from "next/image";
import {Button} from "@nextui-org/react";
import React from "react"

export default function Home() {
    return (
        <div>
            <div className="rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
                <h3 className="text-slate-900 mt-5 text-base font-medium tracking-tight">Writes
                    Upside-Down</h3>
                <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works
                    in outer
                    space.
                </p>
            </div>
            <div>
                <Button color='primary'>click me</Button>
            </div>
        </div>

    );
}
