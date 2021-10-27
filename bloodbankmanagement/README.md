# Blood Bank Management System
![developer](https://img.shields.io/badge/Developed%20By%20%3A-TY_IT_SE_Group4-red)
---
## Screenshots
### Homepage
![homepage snap](https://lh5.googleusercontent.com/O05ywim9Vv-zjqxb7pVWgOrkG9NkdMji_0YkOWUDH8tRbiGI8HAbbi-PutOtObtTwYw5tjThqBeUR-1Fz0bpcR8oBL3yCcls4FDRMYyb2s2Nhla1F5dPUV8TGPe30LO4gbxIGqBS)
### Admin Dashboard
![dashboard snap](https://lh4.googleusercontent.com/izLnc6XtnOG0e1R9yJjP14cSn2il5tj2SmwqPf1F67MnxMU2NYl_DTwOvcFUrONSVmoGbKjvIMo-nMa4iSsRgDjbYz-v3cQ-6xyEZpuXsaD_ruX-MREG4ixswfIl2yGQXIajxMVj)
### Blood Donation 
![invoice snap](https://lh6.googleusercontent.com/LdEBnraKENwDiVJVYxiO7qOtngaOgISAfo2Vo3z8ldOXkyxNJoWanY6CwascoTEL_UyaCQ7ev7Oy_SO81xuy0auNK6CCzznQX-7zpyM0yxH3IyeHp0Ms_efUl8F6eF_uFJAfZFOM)
### Blood Request
![doctor snap](https://lh4.googleusercontent.com/iscCLmSH1m8rnJy-pRUdt5IHAs55wuQtCRZZfSiTymyxh4KKrLlwr4Bck0y9CIR8gw0I8FNhx_ICO1eFkAQU10jU4XSyA1zQ9PbWv9gYA0mCp9VQAKuK5NEMkbOyDF42S1fbNbaE)
### Logout
![doctor snap](https://lh6.googleusercontent.com/GHy7D0uyKS-FJ_Qi8XQOpgSgrn2XI6Uw3LhklxokdmdDM4C0PAOh4e8FQku8DrwPOWy6d6qqepQ83egzV5smn39rVf5VE-D0MfN2gAop8H9g8lQAoFh8lQZFBD4-L2tKaysH-FWv)
---
## Functions

### Admin
- Create Admin account using following command
```
py manage.py createsuperuser
```
- After Login, can see Unit of blood of each blood group available, Number Of Donor, Number of blood request, Number of approved request, Total Unit of blood on Dashboard.
- Can View, Update, Delete Donor.
- Can View, Update, Delete Patient.
- Can View Donation Request made by donor and can approve or reject that request based on disease of donor.
- If Donation Request approved by admin then that unit of blood added to blood stock of that blood group.
- If Donation Request rejected by admin then 0 unit of blood added to stock.
- Can View Blood Request made by donor / patient and can approve or reject that request.
- If Blood Request approved by admin then that unit of blood reduced from blood stock of that blood group.
- If Blood Request rejected by admin then 0 unit of blood reduced from stock.
- Can see history of blood request.
- Can Update Unit Of Particular Blood Group.


### Donor
- Donor can create account by providing basic details.
- After Login, Donor can donate blood, After approval from admin only, blood will be added to blood stock.
- Donor can see their donation history with status (Pending, Approved, Rejected).
- Donor can also request for blood from blood stock.
- Donor can see their blood request history with status.
- Donor can see number of blood request Made, Approved, Pending, Rejected by Admin on their dashboard.
> **_NOTE:_**  Donor can donate blood and can also request for blood.





### Patient
- Create account (No Approval Required By Admin, Can Login After Signup)
- After Login, Can see number of blood request Made, Approved, Pending, Rejected by Admin on their dashboard.
- Patient can request for blood of specific blood group and unit from blood stock.
- Patient can see their blood request history with status (Pending, Approved, Rejected).

---

## HOW TO RUN THIS PROJECT
- Install Python(3.7.6) (Dont Forget to Tick Add to Path while installing Python)
- Download This Project Zip Folder and Extract it
- Move to project folder in Terminal. Then run following Commands :

```
python -m pip install -r requirements. txt
```

```
py manage.py makemigrations
py manage.py migrate
py manage.py runserver
```
- Now enter following URL in Your Browser Installed On Your Pc
```
http://127.0.0.1:8000/
```