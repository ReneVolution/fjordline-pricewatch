import axios from "axios"
import * as fs from "fs"
import yargs from "yargs"
import { hideBin } from "yargs/helpers"
import journeyConfig from "./journeyConfig.json"

async function getFjordlinePricePerLocale(locale: Fjordline.Locale) {
    const url = `https://booking.fjordline.com/bservice/${locale}/getJourneys`
    const res = await axios.post(url, journeyConfig)

    const prices = res.data.journeys.map((j) => {
        const economy_price = j.journeys[0].products.filter(p => p.productCode === 'ESTD')[0].info.price;
        return economy_price;
    })

    return prices;
}

async function main() {
    // TODO: Fix types
    const argv: any = yargs(hideBin(process.argv)).argv;
    const locale = argv.locale;
    const [depPrice, retPrice] = await getFjordlinePricePerLocale(locale)
    const logName = `Fjordline_${locale}.log`
    const logMessage = `"${new Date().toISOString()}","${locale}", "${depPrice}","${retPrice}"\n`

    fs.appendFileSync(logName, logMessage)
}


main().catch(err => console.error(err));