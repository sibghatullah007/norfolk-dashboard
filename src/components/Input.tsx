'use client'
import {Input}  from "@/components/ui/input"
import { useState } from "react"

const InputVal = () => {
    const [companyInputVal, setCompanyInputVal] =useState("")
    return (
        <div className=''>
            <Input
                placeholder={"Filter by company"}
                value={ companyInputVal}
                onChange={(event) =>setCompanyInputVal(event.target.value)}
            /></div>
    )
}

export default InputVal