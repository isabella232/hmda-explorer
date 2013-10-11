this["PDP"] = this["PDP"] || {};
this["PDP"]["templates"] = this["PDP"]["templates"] || {};

this["PDP"]["templates"]["location"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<ul class="fields location-set location-set-' +
((__t = ( num )) == null ? '' : __t) +
'" data-location-num="' +
((__t = ( num )) == null ? '' : __t) +
'">\n\n  <!-- filter field -->\n  <li class="field state_code state_code-' +
((__t = ( num )) == null ? '' : __t) +
'">\n    <label for="state_code-' +
((__t = ( num )) == null ? '' : __t) +
'">State:</label>\n    <div class="widget select">\n      <select class="param" name="state_code-' +
((__t = ( num )) == null ? '' : __t) +
'" id="state_code-' +
((__t = ( num )) == null ? '' : __t) +
'" data-dependent="county_code-' +
((__t = ( num )) == null ? '' : __t) +
' census_tract_number-' +
((__t = ( num )) == null ? '' : __t) +
'" data-toggle="msamd-' +
((__t = ( num )) == null ? '' : __t) +
'" data-placeholder="Select a state">\n        <option value=""></option>\n        <option value="1">Alabama</option>\n        <option value="2">Alaska</option>\n        <option value="4">Arizona</option>\n        <option value="5">Arkansas</option>\n        <option value="6">California</option>\n        <option value="8">Colorado</option>\n        <option value="9">Connecticut</option>\n        <option value="10">Delaware</option>\n        <option value="11">District of Columbia</option>\n        <option value="12">Florida</option>\n        <option value="13">Georgia</option>\n        <option value="15">Hawaii</option>\n        <option value="16">Idaho</option>\n        <option value="17">Illinois</option>\n        <option value="18">Indiana</option>\n        <option value="19">Iowa</option>\n        <option value="20">Kansas</option>\n        <option value="21">Kentucky</option>\n        <option value="22">Louisiana</option>\n        <option value="23">Maine</option>\n        <option value="24">Maryland</option>\n        <option value="25">Massachusetts</option>\n        <option value="26">Michigan</option>\n        <option value="27">Minnesota</option>\n        <option value="28">Mississippi</option>\n        <option value="29">Missouri</option>\n        <option value="30">Montana</option>\n        <option value="31">Nebraska</option>\n        <option value="32">Nevada</option>\n        <option value="33">New Hampshire</option>\n        <option value="34">New Jersey</option>\n        <option value="35">New Mexico</option>\n        <option value="36">New York</option>\n        <option value="37">North Carolina</option>\n        <option value="38">North Dakota</option>\n        <option value="39">Ohio</option>\n        <option value="40">Oklahoma</option>\n        <option value="41">Oregon</option>\n        <option value="42">Pennsylvania</option>\n        <option value="44">Rhode Island</option>\n        <option value="45">South Carolina</option>\n        <option value="46">South Dakota</option>\n        <option value="47">Tennessee</option>\n        <option value="48">Texas</option>\n        <option value="49">Utah</option>\n        <option value="50">Vermont</option>\n        <option value="51">Virginia</option>\n        <option value="53">Washington</option>\n        <option value="54">West Virginia</option>\n        <option value="55">Wisconsin</option>\n        <option value="56">Wyoming</option>\n        <option value="72">Puerto Rico</option>\n      </select>\n    </div>\n  </li>\n  <!-- /filter field -->\n\n  <li class="location-separator">\n      <span>- or -</span>\n  </li>\n\n  <!-- filter field -->\n  <li class="field msamd msamd-' +
((__t = ( num )) == null ? '' : __t) +
'">\n    <label for="msamd-' +
((__t = ( num )) == null ? '' : __t) +
'">Metro Area:</label>\n    <div class="widget select">\n      <select class="param" name="msamd-' +
((__t = ( num )) == null ? '' : __t) +
'" id="msamd-' +
((__t = ( num )) == null ? '' : __t) +
'" data-toggle="state_code-' +
((__t = ( num )) == null ? '' : __t) +
'" data-placeholder="Select an MSA/MD">\n        <option value=""></option>\n        <option value="10180">Abilene - TX</option>\n        <option value="10380">Aguadilla, Isabela - PR</option>\n        <option value="10420">Akron - OH</option>\n        <option value="10500">Albany - GA</option>\n        <option value="10540">Albany - OR</option>\n        <option value="10580">Albany, Schenectady, Troy - NY</option>\n        <option value="10740">Albuquerque - NM</option>\n        <option value="10780">Alexandria - LA</option>\n        <option value="10900">Allentown, Bethlehem, Easton - PA, NJ</option>\n        <option value="11020">Altoona - PA</option>\n        <option value="11100">Amarillo - TX</option>\n        <option value="11180">Ames - IA</option>\n        <option value="11260">Anchorage - AK</option>\n        <option value="11460">Ann Arbor - MI</option>\n        <option value="11500">Anniston, Oxford, Jacksonville - AL</option>\n        <option value="11540">Appleton - WI</option>\n        <option value="11640">Arecibo - PR</option>\n        <option value="11700">Asheville - NC</option>\n        <option value="12020">Athens, Clarke County - GA</option>\n        <option value="12060">Atlanta, Sandy Springs, Roswell - GA</option>\n        <option value="12100">Atlantic City, Hammonton - NJ</option>\n        <option value="12220">Auburn, Opelika - AL</option>\n        <option value="12260">Augusta, Richmond County - GA, SC</option>\n        <option value="12420">Austin, Round Rock - TX</option>\n        <option value="12540">Bakersfield - CA</option>\n        <option value="12580">Baltimore, Columbia, Towson - MD</option>\n        <option value="12620">Bangor - ME</option>\n        <option value="12700">Barnstable Town - MA</option>\n        <option value="12940">Baton Rouge - LA</option>\n        <option value="12980">Battle Creek - MI</option>\n        <option value="13020">Bay City - MI</option>\n        <option value="13140">Beaumont, Port Arthur - TX</option>\n        <option value="13220">Beckley - WV</option>\n        <option value="13380">Bellingham - WA</option>\n        <option value="13460">Bend, Redmond - OR</option>\n        <option value="13740">Billings - MT</option>\n        <option value="13780">Binghamton - NY</option>\n        <option value="13820">Birmingham, Hoover - AL</option>\n        <option value="13900">Bismarck - ND</option>\n        <option value="13980">Blacksburg, Christiansburg, Radford - VA</option>\n        <option value="14010">Bloomington - IL</option>\n        <option value="14020">Bloomington - IN</option>\n        <option value="14100">Bloomsburg, Berwick - PA</option>\n        <option value="14260">Boise City - ID</option>\n        <option value="14460">Boston, Cambridge, Newton - MA, NH</option>\n        <option value="71654">Boston, Cambridge, Quincy - MA</option>\n        <option value="72104">Brockton, Bridgewater, Easton - MA</option>\n        <option value="73104">Framingham, MA</option>\n        <option value="73604">Haverhill, North Andover, Amesbury - MA, NH</option>\n        <option value="74204">Lawrence, Methuen, Salem - MA, NH</option>\n        <option value="74804">Lowell, Billerica, Chelmsford - MA, NH</option>\n        <option value="75404">Nashua - NH</option>\n        <option value="76524">Peabody - MA</option>\n        <option value="78254">Taunton, Norton, Raynham - MA</option>\n        <option value="14500">Boulder - CO</option>\n        <option value="14540">Bowling Green - KY</option>\n        <option value="14740">Bremerton, Silverdale - WA</option>\n        <option value="14860">Bridgeport, Stamford, Norwalk - CT</option>\n        <option value="15180">Brownsville, Harlingen - TX</option>\n        <option value="15260">Brunswick - GA</option>\n        <option value="15380">Buffalo, Cheektowaga, Niagara Falls - NY</option>\n        <option value="15500">Burlington - NC</option>\n        <option value="15540">Burlington, South Burlington - VT</option>\n        <option value="15680">California, Lexington Park - MD</option>\n        <option value="15940">Canton, Massillon - OH</option>\n        <option value="15980">Cape Coral, Fort Myers - FL</option>\n        <option value="16020">Cape Girardeau - MO, IL</option>\n        <option value="16060">Carbondale, Marion - IL</option>\n        <option value="16180">Carson City - NV</option>\n        <option value="16220">Casper - WY</option>\n        <option value="16300">Cedar Rapids - IA</option>\n        <option value="16540">Chambersburg, Waynesboro - PA</option>\n        <option value="16580">Champaign, Urbana - IL</option>\n        <option value="16620">Charleston - WV</option>\n        <option value="16700">Charleston, North Charleston - SC</option>\n        <option value="16740">Charlotte, Concord, Gastonia - NC, SC</option>\n        <option value="16820">Charlottesville - VA</option>\n        <option value="16860">Chattanooga - TN, GA</option>\n        <option value="16940">Cheyenne - WY</option>\n        <option value="16974">Chicago, Joliet, Naperville - IL</option>\n        <option value="23844">Gary - IN</option>\n        <option value="29404">Lake County, Kenosha County - IL</option>\n        <option value="17020">Chico - CA</option>\n        <option value="17140">Cincinnati - OH, KY, IN</option>\n        <option value="17300">Clarksville - TN, KY</option>\n        <option value="17420">Cleveland - TN</option>\n        <option value="17460">Cleveland, Elyria - OH</option>\n        <option value="17660">Coeur d\'Alene - ID</option>\n        <option value="17780">College Station, Bryan - TX</option>\n        <option value="17820">Colorado Springs - CO</option>\n        <option value="17860">Columbia - MO</option>\n        <option value="17900">Columbia - SC</option>\n        <option value="17980">Columbus - GA, AL</option>\n        <option value="18020">Columbus - IN</option>\n        <option value="18140">Columbus - OH</option>\n        <option value="18580">Corpus Christi - TX</option>\n        <option value="18700">Corvallis - OR</option>\n        <option value="18880">Crestview, Fort Walton Beach, Destin - FL</option>\n        <option value="19060">Cumberland - MD, WV</option>\n        <option value="19124">Dallas, Plano, Irving - TX</option>\n        <option value="23104">Fort Worth, Arlington - TX</option>\n        <option value="19140">Dalton - GA</option>\n        <option value="19180">Danville - IL</option>\n        <option value="19300">Daphne, Fairhope, Foley - AL</option>\n        <option value="19340">Davenport, Moline, Rock Island - IA, IL</option>\n        <option value="19380">Dayton - OH</option>\n        <option value="19460">Decatur - AL</option>\n        <option value="19500">Decatur - IL</option>\n        <option value="19660">Deltona, Daytona Beach, Ormond Beach - FL</option>\n        <option value="19740">Denver, Aurora, Lakewood - CO</option>\n        <option value="19780">Des Moines, West Des Moines - IA</option>\n        <option value="19804">Detroit, Livonia, Dearborn - MI</option>\n        <option value="47644">Warren, Farmington Hills, Troy - MI</option>\n        <option value="20020">Dothan - AL</option>\n        <option value="20100">Dover - DE</option>\n        <option value="20220">Dubuque - IA</option>\n        <option value="20260">Duluth - MN, WI</option>\n        <option value="20500">Durham, Chapel Hill - NC</option>\n        <option value="20700">East Stroudsburg - PA</option>\n        <option value="20740">Eau Claire - WI</option>\n        <option value="20940">El Centro - CA</option>\n        <option value="21060">Elizabethtown, Fort Knox - KY</option>\n        <option value="21140">Elkhart, Goshen - IN</option>\n        <option value="21300">Elmira - NY</option>\n        <option value="21340">El Paso - TX</option>\n        <option value="21500">Erie - PA</option>\n        <option value="21660">Eugene - OR</option>\n        <option value="21780">Evansville - IN, KY</option>\n        <option value="21820">Fairbanks - AK</option>\n        <option value="22020">Fargo - ND, MN</option>\n        <option value="22140">Farmington - NM</option>\n        <option value="22180">Fayetteville - NC</option>\n        <option value="22220">Fayetteville, Springdale, Rogers - AR, MO</option>\n        <option value="22380">Flagstaff - AZ</option>\n        <option value="22420">Flint - MI</option>\n        <option value="22500">Florence - SC</option>\n        <option value="22520">Florence, Muscle Shoals - AL</option>\n        <option value="22540">Fond du Lac - WI</option>\n        <option value="22660">Fort Collins - CO</option>\n        <option value="22900">Fort Smith - AR, OK</option>\n        <option value="23060">Fort Wayne - IN</option>\n        <option value="23420">Fresno - CA</option>\n        <option value="23460">Gadsden - AL</option>\n        <option value="23540">Gainesville - FL</option>\n        <option value="23580">Gainesville - GA</option>\n        <option value="23900">Gettysburg - PA</option>\n        <option value="24020">Glens Falls - NY</option>\n        <option value="24140">Goldsboro - NC</option>\n        <option value="24220">Grand Forks - ND, MN</option>\n        <option value="24260">Grand Island - NE</option>\n        <option value="24300">Grand Junction - CO</option>\n        <option value="24340">Grand Rapids, Wyoming - MI</option>\n        <option value="24420">Grants Pass - OR</option>\n        <option value="24500">Great Falls - MT</option>\n        <option value="24540">Greeley - CO</option>\n        <option value="24580">Green Bay - WI</option>\n        <option value="24660">Greensboro, High Point - NC</option>\n        <option value="24780">Greenville - NC</option>\n        <option value="24860">Greenville, Anderson, Mauldin - SC</option>\n        <option value="25020">Guayama - PR</option>\n        <option value="25060">Gulfport, Biloxi, Pascagoula - MS</option>\n        <option value="25180">Hagerstown, Martinsburg - MD, WV</option>\n        <option value="25220">Hammond - LA</option>\n        <option value="25260">Hanford, Corcoran - CA</option>\n        <option value="25420">Harrisburg, Carlisle - PA</option>\n        <option value="25500">Harrisonburg - VA</option>\n        <option value="25540">Hartford, West Hartford, East Hartford - CT</option>\n        <option value="25620">Hattiesburg - MS</option>\n        <option value="25860">Hickory, Lenoir, Morganton - NC</option>\n        <option value="25940">Hilton Head Island, Bluffton, Beaufort - SC</option>\n        <option value="25980">Hinesville - GA</option>\n        <option value="26140">Homosassa Springs - FL</option>\n        <option value="26300">Hot Springs - AR</option>\n        <option value="26380">Houma, Thibodaux - LA</option>\n        <option value="26420">Houston, The Woodlands, Sugar Land - TX</option>\n        <option value="26580">Huntington, Ashland - WV, KY, OH</option>\n        <option value="26620">Huntsville - AL</option>\n        <option value="26820">Idaho Falls - ID</option>\n        <option value="26900">Indianapolis, Carmel, Anderson - IN</option>\n        <option value="26980">Iowa City - IA</option>\n        <option value="27060">Ithaca - NY</option>\n        <option value="27100">Jackson - MI</option>\n        <option value="27140">Jackson - MS</option>\n        <option value="27180">Jackson - TN</option>\n        <option value="27260">Jacksonville - FL</option>\n        <option value="27340">Jacksonville - NC</option>\n        <option value="27500">Janesville, Beloit - WI</option>\n        <option value="27620">Jefferson City - MO</option>\n        <option value="27740">Johnson City - TN</option>\n        <option value="27780">Johnstown - PA</option>\n        <option value="27860">Jonesboro - AR</option>\n        <option value="27900">Joplin - MO</option>\n        <option value="27980">Kahului, Wailuku, Lahaina - HI</option>\n        <option value="28020">Kalamazoo, Portage - MI</option>\n        <option value="28100">Kankakee - IL</option>\n        <option value="28140">Kansas City - MO, KS</option>\n        <option value="28420">Kennewick, Richland - WA</option>\n        <option value="28660">Killeen, Temple - TX</option>\n        <option value="28700">Kingsport, Bristol, Bristol - TN, VA</option>\n        <option value="28740">Kingston - NY</option>\n        <option value="28940">Knoxville - TN</option>\n        <option value="29020">Kokomo - IN</option>\n        <option value="29100">La Crosse, Onalaska - WI, MN</option>\n        <option value="29180">Lafayette - LA</option>\n        <option value="29200">Lafayette, West Lafayette - IN</option>\n        <option value="29340">Lake Charles - LA</option>\n        <option value="29420">Lake Havasu City, Kingman - AZ</option>\n        <option value="29460">Lakeland, Winter Haven - FL</option>\n        <option value="29540">Lancaster - PA</option>\n        <option value="29620">Lansing, East Lansing - MI</option>\n        <option value="29700">Laredo - TX</option>\n        <option value="29740">Las Cruces - NM</option>\n        <option value="29820">Las Vegas, Henderson, Paradise - NV</option>\n        <option value="29940">Lawrence - KS</option>\n        <option value="30020">Lawton - OK</option>\n        <option value="30140">Lebanon - PA</option>\n        <option value="30300">Lewiston - ID, WA</option>\n        <option value="30340">Lewiston, Auburn - ME</option>\n        <option value="30460">Lexington, Fayette - KY</option>\n        <option value="30620">Lima - OH</option>\n        <option value="30700">Lincoln - NE</option>\n        <option value="30780">Little Rock, North Little Rock, Conway - AR</option>\n        <option value="30860">Logan - UT, ID</option>\n        <option value="30980">Longview - TX</option>\n        <option value="31020">Longview - WA</option>\n        <option value="31084">Los Angeles, Long Beach, Glendale - CA</option>\n        <option value="42044">Santa Ana, Anaheim, Irvine - CA</option>\n        <option value="31140">Louisville/Jefferson County - KY, IN</option>\n        <option value="31180">Lubbock - TX</option>\n        <option value="31340">Lynchburg - VA</option>\n        <option value="31420">Macon - GA</option>\n        <option value="31460">Madera - CA</option>\n        <option value="31540">Madison - WI</option>\n        <option value="31700">Manchester, Nashua - NH</option>\n        <option value="31740">Manhattan - KS</option>\n        <option value="31860">Mankato, North Mankato - MN</option>\n        <option value="31900">Mansfield - OH</option>\n        <option value="32420">Mayagüez - PR</option>\n        <option value="32580">McAllen, Edinburg, Mission - TX</option>\n        <option value="32780">Medford - OR</option>\n        <option value="32820">Memphis - TN, MS, AR</option>\n        <option value="32900">Merced - CA</option>\n        <option value="22744">Fort Lauderdale, Pompano Beach, Deerfield Beach - FL</option>\n        <option value="33124">Miami, Miami Beach, Kendall - FL</option>\n        <option value="48424">West Palm Beach, Boca Raton, Boynton Beach - FL</option>\n        <option value="33140">Michigan City, La Porte - IN</option>\n        <option value="33220">Midland - MI</option>\n        <option value="33260">Midland - TX</option>\n        <option value="33340">Milwaukee, Waukesha, West Allis - WI</option>\n        <option value="33460">Minneapolis, St. Paul, Bloomington - MN, WI</option>\n        <option value="33540">Missoula - MT</option>\n        <option value="33660">Mobile - AL</option>\n        <option value="33700">Modesto - CA</option>\n        <option value="33740">Monroe - LA</option>\n        <option value="33780">Monroe - MI</option>\n        <option value="33860">Montgomery - AL</option>\n        <option value="34060">Morgantown - WV</option>\n        <option value="34100">Morristown - TN</option>\n        <option value="34580">Mount Vernon, Anacortes - WA</option>\n        <option value="34620">Muncie - IN</option>\n        <option value="34740">Muskegon - MI</option>\n        <option value="34820">Myrtle Beach, Conway, North Myrtle Beach - SC, NC</option>\n        <option value="34900">Napa - CA</option>\n        <option value="34940">Naples, Immokalee, Marco Island - FL</option>\n        <option value="34980">Nashville, Davidson--Murfreesboro--Franklin - TN</option>\n        <option value="35100">New Bern - NC</option>\n        <option value="35300">New Haven, Milford - CT</option>\n        <option value="35380">New Orleans, Metairie - LA</option>\n        <option value="20764">Edison, New Brunswick - NJ</option>\n        <option value="35004">Nassau, Suffolk - NY</option>\n        <option value="35644">New York, White Plains, Wayne - NJ, NY</option>\n        <option value="35084">Newark, Union - NJ, PA</option>\n        <option value="35660">Niles, Benton Harbor - MI</option>\n        <option value="35840">North Port, Sarasota, Bradenton - FL</option>\n        <option value="35980">Norwich, New London - CT</option>\n        <option value="36100">Ocala - FL</option>\n        <option value="36140">Ocean City - NJ</option>\n        <option value="36220">Odessa - TX</option>\n        <option value="36260">Ogden, Clearfield - UT</option>\n        <option value="36420">Oklahoma City - OK</option>\n        <option value="36500">Olympia, Tumwater - WA</option>\n        <option value="36540">Omaha, Council Bluffs - NE, IA</option>\n        <option value="36740">Orlando, Kissimmee, Sanford - FL</option>\n        <option value="36780">Oshkosh, Neenah - WI</option>\n        <option value="36980">Owensboro - KY</option>\n        <option value="37100">Oxnard, Thousand Oaks, Ventura - CA</option>\n        <option value="37340">Palm Bay, Melbourne, Titusville - FL</option>\n        <option value="37460">Panama City - FL</option>\n        <option value="37620">Parkersburg, Vienna - WV</option>\n        <option value="37860">Pensacola, Ferry Pass, Brent - FL</option>\n        <option value="37900">Peoria - IL</option>\n        <option value="15804">Camden - NJ</option>\n        <option value="37964">Philadelphia - PA</option>\n        <option value="48864">Wilmington - DE</option>\n        <option value="38060">Phoenix, Mesa, Scottsdale - AZ</option>\n        <option value="38220">Pine Bluff - AR</option>\n        <option value="38300">Pittsburgh - PA</option>\n        <option value="38340">Pittsfield - MA</option>\n        <option value="38540">Pocatello - ID</option>\n        <option value="38660">Ponce - PR</option>\n        <option value="38860">Portland, South Portland - ME</option>\n        <option value="38900">Portland, Vancouver, Hillsboro - OR, WA</option>\n        <option value="38940">Port St. Lucie - FL</option>\n        <option value="39140">Prescott - AZ</option>\n        <option value="39300">Providence, Warwick - RI, MA</option>\n        <option value="39340">Provo, Orem - UT</option>\n        <option value="39380">Pueblo - CO</option>\n        <option value="39460">Punta Gorda - FL</option>\n        <option value="39540">Racine - WI</option>\n        <option value="39580">Raleigh - NC</option>\n        <option value="39660">Rapid City - SD</option>\n        <option value="39740">Reading - PA</option>\n        <option value="39820">Redding - CA</option>\n        <option value="39900">Reno - NV</option>\n        <option value="40060">Richmond - VA</option>\n        <option value="40140">Riverside, San Bernardino, Ontario - CA</option>\n        <option value="40220">Roanoke - VA</option>\n        <option value="40340">Rochester - MN</option>\n        <option value="40380">Rochester - NY</option>\n        <option value="40420">Rockford - IL</option>\n        <option value="40580">Rocky Mount - NC</option>\n        <option value="40660">Rome - GA</option>\n        <option value="40900">Sacramento--Roseville--Arden, Arcade - CA</option>\n        <option value="40980">Saginaw - MI</option>\n        <option value="41060">St. Cloud - MN</option>\n        <option value="41100">St. George - UT</option>\n        <option value="41140">St. Joseph - MO, KS</option>\n        <option value="41180">St. Louis - MO, IL</option>\n        <option value="41420">Salem - OR</option>\n        <option value="41500">Salinas - CA</option>\n        <option value="41540">Salisbury - MD, DE</option>\n        <option value="41620">Salt Lake City - UT</option>\n        <option value="41660">San Angelo - TX</option>\n        <option value="41700">San Antonio, New Braunfels - TX</option>\n        <option value="41740">San Diego, Carlsbad - CA</option>\n        <option value="36084">Oakland, Fremont, Hayward - CA</option>\n        <option value="41884">San Francisco, San Mateo, Redwood City - CA</option>\n        <option value="41900">San Germán - PR</option>\n        <option value="41940">San Jose, Sunnyvale, Santa Clara - CA</option>\n        <option value="41980">San Juan, Carolina, Caguas - PR</option>\n        <option value="42020">San Luis Obispo, Paso Robles, Arroyo Grande - CA</option>\n        <option value="42100">Santa Cruz, Watsonville - CA</option>\n        <option value="42140">Santa Fe - NM</option>\n        <option value="42200">Santa Maria, Santa Barbara - CA</option>\n        <option value="42220">Santa Rosa - CA</option>\n        <option value="42340">Savannah - GA</option>\n        <option value="42540">Scranton--Wilkes, Barre--Hazleton - PA</option>\n        <option value="42644">Seattle, Bellevue, Everett - WA</option>\n        <option value="45104">Tacoma - WA</option>\n        <option value="42680">Sebastian, Vero Beach - FL</option>\n        <option value="42700">Sebring - FL</option>\n        <option value="43100">Sheboygan - WI</option>\n        <option value="43300">Sherman, Denison - TX</option>\n        <option value="43340">Shreveport, Bossier City - LA</option>\n        <option value="43420">Sierra Vista, Douglas - AZ</option>\n        <option value="43580">Sioux City - IA, NE, SD</option>\n        <option value="43620">Sioux Falls - SD</option>\n        <option value="43780">South Bend, Mishawaka - IN, MI</option>\n        <option value="43900">Spartanburg - SC</option>\n        <option value="44060">Spokane, Spokane Valley - WA</option>\n        <option value="44100">Springfield - IL</option>\n        <option value="44140">Springfield - MA</option>\n        <option value="44180">Springfield - MO</option>\n        <option value="44220">Springfield - OH</option>\n        <option value="44300">State College - PA</option>\n        <option value="44420">Staunton, Waynesboro - VA</option>\n        <option value="44700">Stockton, Lodi - CA</option>\n        <option value="44940">Sumter - SC</option>\n        <option value="45060">Syracuse - NY</option>\n        <option value="45220">Tallahassee - FL</option>\n        <option value="45300">Tampa, St. Petersburg, Clearwater - FL</option>\n        <option value="45460">Terre Haute - IN</option>\n        <option value="45500">Texarkana - TX, AR</option>\n        <option value="45540">The Villages - FL</option>\n        <option value="45780">Toledo - OH</option>\n        <option value="45820">Topeka - KS</option>\n        <option value="45940">Trenton - NJ</option>\n        <option value="46060">Tucson - AZ</option>\n        <option value="46140">Tulsa - OK</option>\n        <option value="46220">Tuscaloosa - AL</option>\n        <option value="46340">Tyler - TX</option>\n        <option value="46520">Urban Honolulu - HI</option>\n        <option value="46540">Utica, Rome - NY</option>\n        <option value="46660">Valdosta - GA</option>\n        <option value="46700">Vallejo, Fairfield - CA</option>\n        <option value="47020">Victoria - TX</option>\n        <option value="47220">Vineland, Bridgeton - NJ</option>\n        <option value="47260">Virginia Beach, Norfolk, Newport News - VA, NC</option>\n        <option value="47300">Visalia, Porterville - CA</option>\n        <option value="47380">Waco - TX</option>\n        <option value="47460">Walla Walla - WA</option>\n        <option value="47580">Warner Robins - GA</option>\n        <option value="13644">Bethesda, Rockville, Frederick - MD</option>\n        <option value="47894">Washington, Arlington, Alexandria - DC, VA, MD</option>\n        <option value="47940">Waterloo, Cedar Falls - IA</option>\n        <option value="48060">Watertown, Fort Drum - NY</option>\n        <option value="48140">Wausau - WI</option>\n        <option value="48260">Weirton, Steubenville - WV, OH</option>\n        <option value="48300">Wenatchee - WA</option>\n        <option value="48540">Wheeling - WV, OH</option>\n        <option value="48620">Wichita - KS</option>\n        <option value="48660">Wichita Falls - TX</option>\n        <option value="48700">Williamsport - PA</option>\n        <option value="48900">Wilmington - NC</option>\n        <option value="49020">Winchester - VA, WV</option>\n        <option value="49180">Winston, Salem - NC</option>\n        <option value="49340">Worcester - MA, CT</option>\n        <option value="49420">Yakima - WA</option>\n        <option value="49620">York, Hanover - PA</option>\n        <option value="49660">Youngstown, Warren, Boardman - OH, PA</option>\n        <option value="49700">Yuba City - CA</option>\n        <option value="49740">Yuma - AZ</option>\n      </select>\n    </div>\n    <div class="help" title="A Metropolitan Statistical Area (MSA) is a region with relatively high population density at its core (usually a single large city) and close economic ties throughout. Larger MSAs are divided into Metropolitan Divisions (MDs)."><i class="icon-help-alt"></i></div>\n  </li>\n  <!-- /filter field -->\n\n  <!-- filter field -->\n  <li class="field county_code county_code-' +
((__t = ( num )) == null ? '' : __t) +
' disabled hidden">\n    <label for="county_code-' +
((__t = ( num )) == null ? '' : __t) +
'">County:</label>\n    <div class="widget select">\n      <select class="param" name="county_code-' +
((__t = ( num )) == null ? '' : __t) +
'" id="county_code-' +
((__t = ( num )) == null ? '' : __t) +
'" multiple data-concept="fips" data-concept-property="county_name" data-placeholder="Select a state above" data-pre-placeholder="Select a state above" data-post-placeholder="Select a county" disabled>\n      </select>\n    </div>\n  </li>\n  <!-- /filter field -->\n\n  <!-- filter field -->\n  <li class="field census_tract_number census_tract_number-' +
((__t = ( num )) == null ? '' : __t) +
' disabled hidden">\n    <label for="census_tract_number-' +
((__t = ( num )) == null ? '' : __t) +
'">Census tract:</label>\n    <div class="widget select">\n      <select class="param" name="census_tract_number-' +
((__t = ( num )) == null ? '' : __t) +
'" id="census_tract_number-' +
((__t = ( num )) == null ? '' : __t) +
'" multiple data-concept="census_tract_number" data-placeholder="Select a state above" data-pre-placeholder="Select a state above" data-post-placeholder="Select a census tract" disabled>\n      </select>\n    </div>\n    <div class="help" title="A census tract is a small geographic area within a county. Census tracts vary in size, but on average about 4,000 people live in a census tract. Census tract numbers are unique within a county."><i class="icon-help-alt"></i></div>\n  </li>\n  <!-- /filter field -->\n\n<ul>';

}
return __p
};

this["PDP"]["templates"]["option"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<option value="' +
((__t = ( value )) == null ? '' : __t) +
'">' +
((__t = ( label )) == null ? '' : __t) +
'</option>';

}
return __p
};

this["PDP"]["templates"]["spinner"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="spinning"></div>';

}
return __p
};
