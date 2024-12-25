'use client'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const SelectFilterType = () => {
    return (
        <div className="w-full px-0 md:px-1 my-2 md:my-0">
            <Select
                onValueChange={(value) => {
                    console.log("value Changed")
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