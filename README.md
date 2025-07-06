# Web CTF Lab - ການຝຶກອົບຮົມ Cybersecurity

ນີ້ແມ່ນຫ້ອງ CTF LAB ກ່ຽວກັບການຝຶກອົບຮົມ intern cyber GEN 3, ຈັດຂຶ້ນໃນວັນອາທິດທີ 6/9/2025.  
ເວັບໄຊທ້ນີ້ເປັນການເຮຽນຮູ້ສຳລັບນ້ອງໆ ເພື່ອໃຫ້ເຂົ້າໃຈກ່ຽວກັບຊ່ອງໂຫວ່ຂອງເວັບໄຊ ທີ່ພົບໄດ້ບ່ອຍໃນຄວາມເປັນຈິງ ເຊັ່ນ:

- HTTP Method ພື້ນຖານ
- Server-Side Template Injection (SSTI)
- ການອັບໂຫລດໄຟລ໌ທີ່ມີຊ່ອງໂຫວ່

---

## 🔧 Requirements

ນ້ອງໆ ຈຳເປັນຕ້ອງມີ:

- Node.js => `npm`
- Python 3
- `pip` (Python package installer)

### Optional ແນະນຳໃຫ້ມີ:

- Code editor (ເຊັ່ນ: VS Code)
- `curl` ຫຼື Postman ສຳລັບສົ່ງ HTTP requests

---

## 📁 ໂຄງສ້າງຂອງຫ້ອງທົດລອງ (Lab Structure)

```
web-ctf-lab/
├── http_Method/ # ຊ່ອງໂຫວ່ HTTP Method (Node.js/Express)
│ ├── challenge1.js
│ ├── index.js
│ ├── package.json
│ └── node_modules/
├── ssti_lab1/ # SSTI Lab 1 (Python/Flask)
│ ├── app.py
│ ├── flag.txt
│ ├── templates/
│ └── example.py
└── ssti-lab2/ # SSTI Lab 2 (Python/Flask)
├── app.py
├── flag.txt
└── README.md

```

---

## 🚀 ວິທີເ run Labs

### 🧪 1. HTTP Method Lab (`http_Method/`)

**ຕິດຕັ້ງ dependencies ແລະເຮັດວຽກ:**

```bash
cd http_Method
npm install
```

## start LABs

```bash
node index.js      # ສຳລັບ role = admin lab
node challenge1.js # ສຳລັບ GET ແລະ POST HTTP method
```

=> localhost:3000

### 🧪 2. SSTI Lab 1 (ssti_lab1/)

```bash
cd ssti_lab1

# ສ້າງ virtual environment
python -m venv venv

# ເປີດ virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# ຕິດຕັ້ງ Flask
pip install flask

# run app
python app.py

```

### 🧪 3. SSTI Lab 2 (ssti-lab2/)

```bash

cd ssti-lab2

# ສ້າງ virtual environment
python -m venv venv

# ເປີດ virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# ຕິດຕັ້ງ Flask
pip install flask

# ເຮັດວຽກກັບ app
python app.py

```


