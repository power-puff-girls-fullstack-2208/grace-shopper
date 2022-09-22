import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div id="content">
            <div id="banner">
                <div id="bannerImg">
                    <button onClick={() => {}}>Shop our cards</button>
                </div>
                <div id="bannerInfo">
                    <div>
                        <img src="" alt="free shipping logo"/>
                        <p>Free shipping on US orders above $50</p>
                    </div>
                    <div>
                        <img src="" alt="secure payment logo"/>
                        <p>Fast and Easy, 100% secure payment</p>
                    </div>
                    <div id="bannerButtons">

                    </div>
                </div>
            </div>
            <hr/>
            <div id="cardShowcase">
                <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu euismod ipsum. In tincidunt malesuada magna nec aliquet. Phasellus felis urna, congue eu purus at, molestie mollis eros. Fusce dictum tellus eu ligula egestas, at fringilla sem vulputate. Vestibulum tempor pharetra scelerisque. Ut eget consequat mauris. Curabitur quis ligula finibus, fermentum leo nec, mollis velit. Cras et eros quam. Pellentesque consequat lacus a erat cursus, nec interdum tellus fringilla.
                </div>
                <div>
                Aenean congue semper velit, id ultrices ligula rutrum pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam tortor urna, pretium eu euismod id, euismod quis libero. Integer accumsan nisl lectus, sed volutpat odio luctus sit amet. Praesent malesuada tellus tortor, eget feugiat mauris mollis venenatis. Sed molestie vel ipsum quis congue. Integer aliquam scelerisque augue nec finibus. Vivamus eu mi laoreet, congue odio quis, aliquet orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                </div>
                <div>
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam scelerisque sapien lacus, quis tempor felis sagittis vel. Duis imperdiet hendrerit suscipit. Nulla mattis auctor ullamcorper. Cras consectetur ornare ipsum, ut pretium dui. Nunc vulputate purus id felis elementum pharetra. Cras facilisis dolor vel fermentum volutpat. Donec egestas tellus odio, vel sollicitudin est posuere ac. Curabitur laoreet enim sed ex placerat pellentesque. Sed viverra, urna ac tincidunt scelerisque, eros ipsum semper ligula, a maximus nibh ligula nec neque. Vestibulum tincidunt sagittis tellus vitae malesuada. Aenean cursus enim libero, vitae bibendum enim pharetra a. Fusce vitae orci ac nulla placerat dignissim sed sed est. Curabitur varius turpis turpis, ac consectetur metus pulvinar eu.
                </div>
                <div>
                Mauris ut ornare nisl, et elementum sapien. Etiam tempus, mi eu imperdiet laoreet, dolor lorem ornare nunc, nec porta eros mauris vestibulum lectus. Nunc sed nisl non lectus egestas accumsan. Nulla ultrices, nisl in sodales rhoncus, elit elit tristique turpis, non pellentesque justo velit sed velit. Etiam id arcu ex. Sed tempor scelerisque commodo. Cras vulputate gravida turpis id tempor. Donec tincidunt rhoncus est at mattis. Pellentesque ac ultrices nisi. Nunc at turpis eget mauris suscipit porttitor ac vel urna. Nulla quam quam, pulvinar non velit id, posuere aliquam sem. Mauris imperdiet neque eu libero venenatis, vitae fermentum lorem aliquam. Curabitur id nulla a eros vehicula aliquam.
                </div>
                <div>
                Maecenas et tristique quam. In sagittis leo non posuere efficitur. Proin ornare erat sed nisl facilisis pulvinar. Aliquam sem est, malesuada sit amet porttitor nec, elementum gravida ligula. Nulla facilisi. Vivamus vel porttitor felis. Donec finibus, dolor et semper cursus, orci nisi malesuada eros, ac porttitor quam mi sed ligula. Pellentesque sed lacinia ante, nec consectetur massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar tortor urna, non finibus odio ultricies a. Nunc aliquam lorem eu ligula tempor mattis.
                </div>
                <div>
                Suspendisse lorem mi, tempor et est sed, lobortis vulputate eros. Aliquam semper condimentum ligula. Praesent posuere, odio sed tempor porta, ipsum tellus pretium tortor, scelerisque egestas ex ligula id risus. Proin tempus tortor ex, at feugiat ex mattis in. Etiam vestibulum cursus elit mollis pharetra. Pellentesque finibus, erat id blandit consequat, enim lacus ultrices magna, et venenatis nisi leo id lacus. Nunc vehicula, nunc ut fringilla vehicula, dolor libero semper tellus, eu facilisis justo sapien sed massa. In porttitor rutrum congue. Curabitur ullamcorper mi eros, hendrerit feugiat augue vestibulum eu.
                </div>
                <div>
                Aenean volutpat consequat finibus. In porttitor pulvinar elit. Suspendisse convallis semper sapien, a scelerisque nibh laoreet sit amet. Donec at sollicitudin lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis odio et mi dictum fermentum. Mauris semper imperdiet risus eget malesuada. Fusce dui nulla, ullamcorper eget ullamcorper vitae, venenatis eget sem. Maecenas viverra tincidunt orci id faucibus. Nulla a risus at neque iaculis ultrices sed ut elit. Nullam interdum pharetra nibh, a consequat nisl interdum non. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </div>
                <div>
                Sed a ex enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In bibendum, neque sit amet faucibus posuere, sapien erat feugiat ipsum, vitae scelerisque nisl urna sit amet mauris. Nam commodo justo quis dolor ultrices egestas. Duis augue ex, ornare id odio at, mattis viverra felis. Duis porttitor, velit vel scelerisque ultricies, ante nisi dapibus ante, id vulputate mi ante ut purus. Morbi ultrices, neque sit amet consectetur eleifend, libero diam imperdiet libero, vel feugiat turpis nibh et ex. Nunc sollicitudin viverra dolor vel fermentum. Integer quis elementum nibh. Cras eget tempor ligula. Nullam eu turpis diam. Donec eu nisi vitae lectus rutrum placerat vitae vitae enim. Ut congue velit mauris, vel suscipit lectus suscipit id. Nam sed ex quis nunc convallis laoreet quis condimentum lacus.
                </div>
                <div>
                Fusce mattis interdum nulla a pellentesque. Fusce quis massa malesuada, fringilla nulla eu, mattis nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ipsum odio, dictum lacinia dui sit amet, dapibus tempus erat. Curabitur in vulputate diam. Integer eget luctus ligula. Donec vulputate nisl eu nisl congue fringilla. Nulla ipsum mi, vehicula malesuada viverra dictum, pellentesque non ante. Quisque luctus elementum magna vel convallis.
                </div>
                <div>
                Morbi eleifend, risus ut fringilla congue, ligula nibh laoreet eros, sollicitudin gravida tortor erat ac justo. Quisque euismod urna vitae neque luctus, ut porta lorem pellentesque. Curabitur nec massa ac metus mollis eleifend. Curabitur condimentum facilisis ante vel maximus. Aenean malesuada a lorem vitae commodo. Vestibulum ut tortor mattis, bibendum nisi in, efficitur sem. Nunc varius sagittis nulla, eget scelerisque nibh. Praesent scelerisque pellentesque fringilla. Proin tempus suscipit facilisis. Nam vestibulum facilisis neque. Morbi sit amet placerat arcu, quis bibendum ligula. Vestibulum nec eros non velit efficitur ultricies quis sed quam. Morbi elit est, finibus et ligula et, fringilla pretium dui. Phasellus dictum metus vitae ligula imperdiet, a cursus neque pulvinar.
                </div>
                <div>
                Nam varius orci ut purus venenatis blandit. Sed eu commodo tellus. Vestibulum augue odio, convallis non leo id, mattis eleifend turpis. Fusce interdum, enim eu convallis consectetur, justo elit suscipit sapien, quis accumsan ex dolor et massa. Nunc at laoreet mauris, non maximus ligula. Nunc ac vestibulum nibh, ac euismod ante. Proin nec dolor mauris. Integer semper ex et varius rutrum. Praesent imperdiet iaculis diam, sed tempor nunc lacinia non. Cras facilisis orci a dolor condimentum iaculis sit amet nec diam. Vivamus et vehicula mauris, nec eleifend ipsum.
                </div>
                <div>
                Nunc sit amet luctus elit, quis sagittis mi. Quisque pharetra diam ornare, accumsan risus at, blandit ligula. Vivamus aliquet, massa feugiat ultricies tincidunt, quam erat aliquet lectus, a porta justo mauris sed odio. Aenean vel mi vitae nisl vehicula auctor. Curabitur id eros a libero placerat elementum. In varius interdum placerat. Pellentesque mattis ante sit amet iaculis pulvinar. Curabitur molestie auctor orci, vel rutrum eros scelerisque nec. Vivamus finibus, sem vel semper maximus, nibh justo mollis turpis, ac lacinia massa leo at nunc. Mauris non mi eget sapien scelerisque aliquet malesuada non nisi.
                </div>
            </div>
        </div>
    )
}

export default Home;