


import "../table/table.css"
import Sydney from "../../Assets/sydney.jpg"
import Twelve from "../../Assets/twelve.jpg"
import Shipwrecks from "../../Assets/shipwrecks.jpg"
import GlassHouse from "../../Assets/glass_house_mountains.jpg"
import LordHowe from "../../Assets/lord_howe_island.jpg"

export function TableComponet () {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Location</th>
                <th>Content</th>
            </tr>
           
            <tr>
                <td>Sydney Harbour</td>
                <td><img src={Sydney} width={100} height={100}/></td>
                <td>New South Wales</td>
                <td>An Australian icon</td>
            </tr>
            <tr>
                <td>Twelve Apostles</td>
                <td><img src={Twelve} width={100} height={100}/></td>
                <td>Victoria</td>
                <td>White sand beaches</td>
            </tr>
            <tr>
                <td>Shipwrecks</td>
                <td><img src={Shipwrecks} width={100} height={100}/></td>
                <td>Queensland</td>
                <td>A part of Australian history</td>
            </tr>
            <tr>
                <td>Glass House Mountains</td>
                <td><img src={GlassHouse} width={100} height={100}/></td>
                <td>Queensland</td>
                <td>The Sunshine Coast</td>
            </tr>
            <tr>
                <td>Lord Howe Island</td>
                <td><img src={LordHowe} width={100} height={100}/></td>
                <td>New South Wales</td>
                <td>The natural World Heritage sites</td>
            </tr>
            
        </table>
    )
}