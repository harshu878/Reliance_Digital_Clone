const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());
const port = 3000;

const Data = [
  {
    television: [
      {
        image:
          "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjIzMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaDE0Lzk4MTAwNTg5MDM1ODIuanBnfGFiZjk3NDA1MzY1ODQwYjc2OTZkMzY4OTI1Y2RmOWM3OTI4NTE1MTlkMDFlOTUwYmZkM2U5MTVlYmIyZGFlYzg",
        title: "ONEPLUS 81.28 cm (32 inch) HD Smart LED TV",
        price: "Rs 13,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Kodak-32HDX7XPRO-Television-492166141-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MzcxOHxpbWFnZS9qcGVnfGltYWdlcy9oNGUvaGI4Lzk1MTE0NzEzNDk3OTAuanBnfDE3MTQ4OGE5OWIzNWUwNjRkZDE0OTRkNTM3MDhjZTAwOGVjYTc4OWZjNzQ0MTdhNzczYzQ5ZTgyYWE2ODRlYzI",
        title: "Kodak 80 cm (32 inch) HD Ready LED Smart TV",
        price: "Rs 11,499",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/TCL-32S5201-Smart-TV-492403797-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNTU3MHxpbWFnZS9qcGVnfGltYWdlcy9oNjQvaDZmLzk4MzU0MDkzNDI0OTQuanBnfGViMTUxYmE0YmU4YzUyODU5MzM2ZTY2NjhjZjc1YTBhNGI5OWQ0OWNiYjg0OTkyYTlhMmI0ZGQyZDkxOWQwN2I",
        title: "TCL 81.28 cm (32 inch) 2Yr Warranty HD Android Smart",
        price: "Rs 13,990",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Realme-Realme-32-Televisions-491973484-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MTc4M3xpbWFnZS9qcGVnfGltYWdlcy9oOGYvaGQ3Lzk0NzU5NzIxNjk3NTguanBnfDgxZmQwM2JmNTJhM2EwYTcxZTViNzA5YjkzNWVmZjJiMjg4OTM4NGVkZWM2ODA2ZGQ4OTg1ZjAzOTNiNjVlMjc",
        title: "Realme 80 cm (32 inch) HD Ready LED Smart TV",
        price: "Rs 14,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Hisense-32A4G-Smart-Television-492338740-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NTUzMHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGVkLzk3Nzk2NjE5NjMyOTQuanBnfGVkNTA5YWE2NmZlMjNhZTRmNzY1NzE4YjU0NGRhMzc4MjZhYjM0ZmFkMGEyMmE4YTBhZGM2ZWUzMzJiZGZmOTk",
        title: "Hisense 80 cm (32 inch) 2Yr Warranty HD Smart LED TV",
        price: "Rs 13,990",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Sansui-JSW32ASHD-Televisions-491973449-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNDY0NHxpbWFnZS9qcGVnfGltYWdlcy9oZGEvaDI2Lzk4NTE0MTExMzY1NDIuanBnfDNlMGMzYzQ5OGUzMWNmZDFiZDg5OTY3N2I2ZmU0YTdiODg2NDkwZGJkNTMwYmQxNjcyZjcwNWY0YmE0Y2NhZjI",
        title: "Sansui Prime Series 80 cm (32 inch) HD",
        price: "Rs 12,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Toshiba-32V35KP-Smart-LED-TV-492796720-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDgxODF8aW1hZ2UvcG5nfGltYWdlcy9oMjMvaGQ0Lzk4MTU4MTIzNDE3OTAucG5nfDI1NmI4ZjUzMTZkYTQ5NTUzMDMxNzczYTlhNzBhYmE0ZDI3ZTQ3ZGE2ZTAwMWMwYzc0ZTE2MWJlYjM3Njc0ZDk",
        title: "Toshiba 80 cm (32 inch) HD Ready Smart",
        price: "Rs 14,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/IFFALCON-32F52-Televisions-492403800-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0OTU5OXxpbWFnZS9qcGVnfGltYWdlcy9oODcvaDc0Lzk3MjcxMzgxMzYwOTQuanBnfDM1N2Q4MTYxMTcyZWMwZjIyM2EzMWJkNTA0OGE5YTQ4OGM2MTlkMDFhYzQyYzRkM2E3MDFlYzQ3MWJhYWQ0YjM",
        title: "IFFALCON 81.28 cm (32 inch) HD Android Smart TV",
        price: "Rs 12,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Sony-KD-32W830K-IN5-Television-492912672-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMDgzOHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaDQ5Lzk4Mjg5NTY1Njk2MzAuanBnfDM5ODQ0OTQ1MGVjYjZkYThjN2VjNzJjNmZjY2U5MmE2YWU2N2IwZjNiODc3Njg4OWM4NTUzYjA0YjZiMzE3NmQ",
        title: "Sony 81.28 cm (32 Inch) HD Smart Android TV",
        price: "Rs 28,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/BPL-32H-B4000-TV-492338719-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1MDg4N3xpbWFnZS9qcGVnfGltYWdlcy9oOTQvaDRkLzk4MzI4NTg5NDM1MTguanBnfGIyM2UwZmQ5NzQ3OGEzMzQ0YzY1ZTRkZTZkNjc1NzY3Yzg4MDkxOGFkMDFlMjMzYTFjYjNkM2ZhMWQwM2YyNjA",
        title: "BPL 80 cm (32 inch) HD Ready LED Android Smart TV",
        price: "Rs 13,990",
      },
    ],
  },
  {
    laptop: [
      {
        image:
          "https://www.reliancedigital.in/medias/Acer-15-EX215-11Gi3-Laptop-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NDE4MnxpbWFnZS9qcGVnfGltYWdlcy9oMjUvaGQ3Lzk4NDEyMjU4NTkxMDIuanBnfDYxNjY2MzkwMzNkYWFiNTg2OGJlZGFhOGZkY2RhYzZjZWI2ZDFkODA3ZjU1ZjY2Yjk3ZmVlMDhjZDgyMjEzNDQ",
        title: "Acer EX215 Extensa 15 Laptop",
        price: "Rs 30,990",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Lenovo-8EIN-Laptops-492849151-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDYyNHxpbWFnZS9qcGVnfGltYWdlcy9oYTEvaDZjLzk4NDk0MDMwNDc5NjYuanBnfDRmNDdlNTJlOGI3ZjViODc2NzQxNDBkYWQ3YzY5YmQyOGUyZTFlMjg1NDliOTM0OGFjYjQ4YjVjNjc4MmFkNmE",
        title: "Lenovo 8EIN Ideapad Silm 3i Laptop",
        price: "Rs 33,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/HP-6Q121PA-ACJ-High-End-Laptops-492850685-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDM5N3xpbWFnZS9qcGVnfGltYWdlcy9oZTkvaGEwLzk4NjAzODc5MzAxNDIuanBnfGQzZGMyOTY1OGVkNTI0MjUwMmYzNTFkODgyMTIyYTRjYThlZDM3M2M1ZDAzNDlkMGNlZjM2OTE3ZjdjNzYxMmU",
        title: "HP 14s-ef1002TU Laptop",
        price: "Rs 44,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/HP-536C2PA-ACJ-Laptop-492850353-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyOTkxMXxpbWFnZS9qcGVnfGltYWdlcy9oZTQvaDk5Lzk4MzEwMTQwMDY4MTQuanBnfGM3MTE4ZWJhN2VmMzdhZmZkZGM4YWVkNWNiZmM2NTBmYzQ1MjE5ZTdlMmNhNWQ1ZTNmOTQ0YzJlOTQyNWI2NmQ",
        title: "HP 15s-fq2626TU Laptop",
        price: "Rs 36,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Lenovo-82H700V2IN-LAPTOP-492849663-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxOTcxMXxpbWFnZS9qcGVnfGltYWdlcy9oMTMvaDQ5Lzk4NDkyMzcyNzQ2NTQuanBnfGExYzUyODI3MDM5YTk0OGE5OGRhZWU0NWZkZmJkYTg4NGIzMTc5NmEzMzFmYzhjYzdhN2Q5OTNjYmUxYmI4MDM",
        title: "Lenovo V2IN IdeaPad Slim 3i Laptop",
        price: "Rs 41,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/ONEPLUS-32Y1-TV-491895010-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjIzMXxpbWFnZS9qcGVnfGltYWdlcy9oNjkvaDE0Lzk4MTAwNTg5MDM1ODIuanBnfGFiZjk3NDA1MzY1ODQwYjc2OTZkMzY4OTI1Y2RmOWM3OTI4NTE1MTlkMDFlOTUwYmZkM2U5MTVlYmIyZGFlYzg",
        title: "ONEPLUS 81.28 cm (32 inch) HD Smart LED TV, 32Y1",
        price: "Rs 13,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Asus-X512DA-BQ301WS-Laptops-492850308-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMTUzNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDRjL2gzMy85ODQ3NjgxMzg0NDc4LmpwZ3w5NjhlNGUzMWMwZWM3ZjYwZjQxNjlkMzhkODVkYmU2MWM5YmVlNWRkMzE1YWYwMTIxMTk5OTU2NGU0OTM1Nzhh",
        title: "Asus BQ301WS VivoBook 15 Laptop ",
        price: "Rs 33,299",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/HP-FQ4021TU-High-End-Laptops-492575363-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w1NzQ2OHxpbWFnZS9qcGVnfGltYWdlcy9oMTkvaGYxLzk4MDEzNTQyODA5OTAuanBnfGNlZWY4NTRlNTdjNjI0ZGUzMDNlMWY5OWVjYTA5YTFkNjI4OWNiMDNiNTE5YWY0NjQwODFiZWI4MGFhZWViNDU",
        title: "HP 15S-FQ4021TU Laptop",
        price: "Rs 52,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/HP-533U4PAACJ-Laptop-492849312-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzM2MnxpbWFnZS9qcGVnfGltYWdlcy9oY2UvaGNkLzk4MjQ0MzU0NzAzNjYuanBnfDc0YTRhMTY0NzNlMjQ5YzY2MDg3ZmU2YjQyNmNhNzU0ODQ5ZjkyOGE1N2RjMDBhZTM4YTM5ZjQ4ZTlhMmM0NTE",
        title: "ONEPLUS 81.28 cm (32 inch) HD Smart LED TV, 32Y1",
        price: "Rs 13,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/MSI-639IN-Laptop-492575136-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzMjk5MnxpbWFnZS9qcGVnfGltYWdlcy9oMDcvaDE2Lzk3NzAyMDA0OTgyMDYuanBnfDdmZjViODE0MjIyNTM5NmUxN2Y5MDNmMTZkNzcyOTVkZDVlMTc5M2QyMzZkMzg1NmI3NTRmMWFhYTA0NDQ2ZmI",
        title: "MSI Modern 14 B10MW Laptop",
        price: "Rs 41,999",
      },
    ],
  },
  {
    airconditioner: [
      {
        image:
          "https://www.reliancedigital.in/medias/Haier-HSU10Q-TCW3B-Air-Conditioners-581026821-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTAxOXxpbWFnZS9qcGVnfGltYWdlcy9oODEvaDUyLzk3NzM0NzU4ODkxODIuanBnfDVlOGIxYjI3ZmI3MTIyMWZiMzBjNTgzZDBmYTBjYzg4ZDE0M2UwZmUwYzlmZWEwOTg1ODBkOTk0NWE5ZDUzYmM",
        title: "Haier 0.9 Ton 3 Star QuriCool",
        price: "Rs 27,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/HISENSE-AS-18TC4RAM0-Air-Conditioners-581026857-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzQ1MnxpbWFnZS9qcGVnfGltYWdlcy9oNDMvaDU1Lzk4MTAwNjU0NTcxODIuanBnfDM0MGU2NWE2YjZlNmI2YWZlYWUwMmRlYWNjYjU5ZThhMmYzNGIxOTFhYTNmN2E0ZTY2ZWQ4ODY5MTAxNGI2MWI",
        title: "Hisense 1.5 Ton 4 Star, 4 in 1 Convertible",
        price: "Rs 29,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Samsung-AR18BYLZAUR-Split-Air-Conditioner-581026959-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMzEzM3xpbWFnZS9qcGVnfGltYWdlcy9oY2UvaDJmLzk4MTMxMjgzODA0NDYuanBnfDZiNDIwMGUzODlmMDAyNjkyNTYyNzA2MTIxN2FiM2M4M2ViZTk3ZTJlOThhNTFlMzJjNDQ0ZmYwMmQwMDkwNGE",
        title: "Samsung 1.5 Ton 5 Star 5 in 1 Convertible Inverter Split AC",
        price: "Rs 41,990",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Kelvinator-KAS-X18320P-SPLIT-AIRCONS-581026690-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyNTc4OXxpbWFnZS9qcGVnfGltYWdlcy9oOTMvaDhmLzk4MDg4Mjg0NjUxODIuanBnfGI4NWU0ZDVmNTlkZDdlYmRmYzA0YjQ0MTZlNDZhNDMwMTJhNjk1M2FkMzY3ZTc1ZjIzYTlkNmNiMTk4MWVhNzk",
        title: "Kelvinator 1.5 Ton 3 Star K600+ Series",
        price: "Rs31,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/LG-PS-Q18MNXE1-AMLG-SPLITAIRCONS-581026784-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MTQ5fGltYWdlL2pwZWd8aW1hZ2VzL2hhNC9oMzcvOTc2MzU3OTU1OTk2Ni5qcGd8ZWMyMGU3NzUxZjgxNjZjYTViZWZmM2I4ZDE0NmZmM2VjYzU1ZGY3MDExYjM5NzgyODMyN2U4NDBhMmE2MzY0MA",
        title: "LG 1.5 Ton 3 Star 5 in 1 Super Convertible Inverter Split AC",
        price: "Rs 37,990",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Haier-HSU15C-TFW3B-Air-Conditioners-581026822-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzg2NXxpbWFnZS9qcGVnfGltYWdlcy9oNWYvaGE4Lzk3NzM0NzM1OTU0MjIuanBnfDE0ZGI4MTRiNDk4YmU3ODAwN2I0YjMyYTFlNjg4ZjIwMGE2YzAzZmMxMDgwYTIwOWU2NjY4YTA5NjE1OWM0MTc",
        title: "Haier SAC 1.2 Ton 3 Star",
        price: "Rs 29,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Onida-ICY-Air-Conditioners-581026789-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wzNjU4MnxpbWFnZS9qcGVnfGltYWdlcy9oZGIvaGIzLzk3NzM0NjY3MTQxNDIuanBnfDIwZmViNGVjMjlhMzU4ZGQzNGQ0NmZlMmQxYmJiNDZkNzVmMTljOTI0ZjdmNzc4YjIyM2IzYjA3M2U3NDJhZjI",
        title: "Onida 1.5 Ton 3 Star IR183ICY Inverter Split AC",
        price: "Rs 31,799",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Daikin-MTKL35TV-SPLITAIRCONS-581026723-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDg5MnxpbWFnZS9qcGVnfGltYWdlcy9oYzkvaGU4Lzk3NjM1ODQ1NDA3MDIuanBnfDVmNzY0ZDU5OThjOGYzMTA2ZmY2ZTg0ZTQwYzY1ZmQwMGZiODI2NzMxMmJiN2Q0YmJmZmM3N2UxODRlMGJlNTU",
        title: "DAIKIN MTKL35TV 1 Ton 3 Star Inverter Split AC",
        price: "Rs 31,990",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Daikin-FTKM50U-Air-Conditioners-581026892-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMTQ2MnxpbWFnZS9qcGVnfGltYWdlcy9oZWQvaDk4Lzk4MDQwNTU5MzcwNTQuanBnfDljMWMxYTQ1Y2M2NDVhNzQ1NzE0YTk2MjM4ZTY3MTJhYTE1ZjdlZTMyMWZjZDhhMzU5NjdhMTQ2YzYyMjQxMDI",
        title: "Daikin 1.5 Ton 5 Star Inverter Split AC",
        price: "Rs 46,999",
      },

      {
        image:
          "https://www.reliancedigital.in/medias/Panasonic-KU12YKYF-SPLITAIRCONS-581026816-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMjk2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzcvaDBiLzk3ODE0NzIzMjk3NTguanBnfDE2OWQzY2NkZDgyNWY1MmU4ZWQ0ZDUwODY5MmNhZGJhNmYwYmMzMGIwMjE0ODMwZjUxM2NlNGRhZjM3NmI0M2U",
        title: "Panasonic 1 Ton 3 Star WiFi Smart Inverter Split AC",
        price: "Rs 35,599",
      },
    ],
  },
];

app.get("/", (req, res) => {
  res.json(Data);
});

app.listen(port, () => {
  // start server node index.js
  console.log(`Listening on port ${port}`);
});
