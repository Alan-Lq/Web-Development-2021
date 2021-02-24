import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  itemList = [
    {
      "Name":"Ink Cartridge | Black",
      "Description":"Color: Black.Cartridge yield (approx.): 190 pages.",
      "Rating":4.7,
      "Link":"https://www.amazon.com/HP-Cartridge-F6U62AN-Deskjet-Officejet/dp/B00WR23X5I/ref=lp_16225007011_1_1",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/71qZHCfiDWL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71Eac9vLbeL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/81F4GPcdiIL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Roku Express ",
      "Description":"HD Streaming Media Player with High Speed HDMI Cable and Simple Remote",
      "Rating":5.0,
      "Link":"https://www.amazon.com/Roku-Express-Streaming-Media-Player/dp/B07WVFCVJN/ref=lp_16225007011_1_2",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/81%2B0dqbDGWL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/814dsytsu8L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71jA8eeATDL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black",
      "Description":"21.5 inches Full HD (1920 x 1080) widescreen IPS display",
      "Rating":4.7,
      "Link":"https://www.amazon.com/Acer-SB220Q-Ultra-Thin-Frame-Monitor/dp/B07CVL2D2S/ref=lp_16225007011_1_5",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71GbO41HbYL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/71xb7GDuAGL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Beatrice Home Fashions Medallion Chenille Bedspread, King, White",
      "Description":"100% Cotton. Imported",
      "Rating":4.4,
      "Link":"https://www.amazon.com/Beatrice-Home-Fashions-Medallion-Bedspread/dp/B00FPEKJR0/ref=sr_1_2?dchild=1&keywords=Home+bedding&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=icLnY&pd_rd_wg=yAzOZ&pf_rd_p=bbbef69f-3d9e-41ab-b1eb-e08d5690939b&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1614096311&s=kitchen-intl-ship&sr=1-2",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/81ImzM%2BgMgL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Cozy Line Home Fashions Pink Rose Garden Floral Reversible Coverlet Bedspread Quilt Bedding Set (Ivory/Roses, Queen - 3 Piece)",
      "Description":"Care Instruction: Machine wash separately in cold water. Tumble dry low heat. Do not bleach",
      "Rating":4.7,
      "Link":"https://www.amazon.com/Cozy-Line-Home-Fashions-Reversible/dp/B01CTAO84W/ref=sr_1_3?dchild=1&keywords=Home+bedding&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=icLnY&pd_rd_wg=yAzOZ&pf_rd_p=bbbef69f-3d9e-41ab-b1eb-e08d5690939b&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1614096311&s=kitchen-intl-ship&sr=1-3",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/91u9fmL1YNL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/91ElT2K0P0L._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/91IWXOsoOBL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"NVIDIA Jetson AGX Xavier Developer Kit (32GB)",
      "Description":"NVIDIA Jetson Xavier is an AI computer for Autonomous Machines with the performance of a GPU workstation in under 30W",
      "Rating":4.4,
      "Link":"https://www.amazon.com/NVIDIA-Jetson-Xavier-Developer-32GB/dp/B083ZL3X5B/ref=sr_1_4?dchild=1&fst=as%3Aoff&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=Q3DE9&pd_rd_wg=yAzOZ&pf_rd_p=83ab1c34-7657-4d09-b72d-0a3e4b634b1d&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1602294815&rnid=16225007011&s=computers-intl-ship&sr=1-4",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/61m739zmagL._AC_SL1059_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/715Low-A4kL._AC_SL1500_.jpg",
                "https://images-na.ssl-images-amazon.com/images/I/41wI8A534HL._AC_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"BOOX Note3 10.3 ePaper, Android 10, Front Light, 4G 64G, Digital Paper E Ink Notepad",
      "Description":"Description",
      "Rating":3.9,
      "Link":"https://www.amazon.com/BOOX-ePaper-Android-Digital-Notepad/dp/B08L12FZSK/ref=sr_1_7?dchild=1&fst=as%3Aoff&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=Q3DE9&pd_rd_wg=yAzOZ&pf_rd_p=83ab1c34-7657-4d09-b72d-0a3e4b634b1d&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1602294815&rnid=16225007011&s=computers-intl-ship&sr=1-7",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/619IO2qlqoL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Fingbox Home Network Monitoring, Security & Control - Stop Intruders & Hackers, Control Screen Time, Get Internet Performance Reports & Automate Your Connected Home.",
      "Description":"Fingbox, from the makers of Fing App, provides security and control for your connected devices and home internet set-up.",
      "Rating":3.5,
      "Link":"https://www.amazon.com/Fing-Fingbbox/dp/B07JMFHNW7/ref=sr_1_9?dchild=1&fst=as%3Aoff&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=Q3DE9&pd_rd_wg=yAzOZ&pf_rd_p=83ab1c34-7657-4d09-b72d-0a3e4b634b1d&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1602294815&rnid=16225007011&s=computers-intl-ship&sr=1-9",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/61v8erz5WgL._AC_SL1500_.jpg"],
      "imgCnt":0
    },
    {
      "Name":'Lenovo Yoga 9i 14 2-in-1 14" FHD Touch-Screen -11th Gen Intel Evo Platform i7-1185G7-16GB DDR4 - 512GB SSD',
      "Description":"11th Generation Intel Core i7-1185G7 Processor (3.00 GHz, up to 4.80 GHz with Turbo Boost, 4 Cores, 8 Threads, 12 MB Cache); 16GB Soldered LPDDR4x-4266 Memory; 512GB SSD M.2 2280 PCIe 3.0x4 NVMe",
      "Rating":"None",
      "Link":"https://www.amazon.com/Lenovo-Touch-Screen-Platform-i7-1185G7-16GB-Built/dp/B08QH1C5PY/ref=sr_1_11?dchild=1&fst=as%3Aoff&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=Q3DE9&pd_rd_wg=yAzOZ&pf_rd_p=83ab1c34-7657-4d09-b72d-0a3e4b634b1d&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1602294815&rnid=16225007011&s=computers-intl-ship&sr=1-11",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/41Rjr%2B67OtL._AC_.jpg"],
      "imgCnt":0
    },
    {
      "Name":"Ematic PBS Kids Playtime Pad 7",
      "Description":"Standing screen display size	7 inches",
      "Rating":3.6,
      "Link":"https://www.amazon.com/Ematic-PBS-Kids-Playtime-Pad/dp/B07ZFSPRX1/ref=sr_1_15?dchild=1&fst=as%3Aoff&pd_rd_r=bc0a545d-d07d-4235-85cb-6d7d7e109abe&pd_rd_w=Q3DE9&pd_rd_wg=yAzOZ&pf_rd_p=83ab1c34-7657-4d09-b72d-0a3e4b634b1d&pf_rd_r=XF8608SWWP17WE2NW23K&qid=1602294815&rnid=16225007011&s=computers-intl-ship&sr=1-15",
      "imgSrc":["https://images-na.ssl-images-amazon.com/images/I/51rCZVSgNjL._AC_SL1000_.jpg"],
      "imgCnt":0
    }
  ]

  goBack(i:number){
    if(this.itemList[i]["imgSrc"].length >1){
      if(this.itemList[i]["imgCnt"] == 1 || this.itemList[i]["imgCnt"]==2){
        this.itemList[i]["imgCnt"]--;

      }else if(this.itemList[i]["imgCnt"] ==0){
        this.itemList[i]["imgCnt"] = 2;
      }
    }
  }

  goForward(i:number){
    if(this.itemList[i]["imgSrc"].length >1){
      if(this.itemList[i]["imgCnt"] == 0 || this.itemList[i]["imgCnt"]==1){
        this.itemList[i]["imgCnt"]++;

      }else if(this.itemList[i]["imgCnt"] ==2){
        this.itemList[i]["imgCnt"] = 0;
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
