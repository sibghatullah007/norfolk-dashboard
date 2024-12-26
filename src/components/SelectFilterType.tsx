'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { AppContext } from "@/context"
import { useContext } from "react"

const SelectFilterType = () => {
    const {EffectiveContactFilterType, setEffectiveContactFilterType} = useContext(AppContext)
    return (
        <div className="w-full px-0 md:px-1 my-2 md:my-0">
            <Select
                onValueChange={(value) => {
                    setEffectiveContactFilterType(value)
                }}
            >
                <SelectTrigger className="w-full">
                    <SelectValue className="placeholder:text-white-400" placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                        <SelectItem value="month">
                            Month
                        </SelectItem>
                        <SelectItem value="day">
                            Day
                        </SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SelectFilterType