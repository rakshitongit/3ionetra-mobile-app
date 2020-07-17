export class WebUtils {
    public static root_url: string = "https://www.api.3ionetra.com/v1/"
}

export class DateTimeUtils {
    
    static getRageOfDate(val: number = 5): string {
        let currentYear = new Date().getFullYear()
        currentYear -= val
        let yearValues = ""
        for (let i = 0; i < 2 * val; i++) {
            yearValues += (currentYear++).toString() + ','
        }
        return yearValues
    }
}
