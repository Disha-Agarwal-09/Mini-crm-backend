# 🧩 Mini CRM Backend

A **Mini CRM Backend System** built using **NestJS**, **PostgreSQL**, and **Prisma ORM**, implementing **JWT authentication**, **role-based authorization**, and clean REST APIs as part of the **Prysm Labs Backend Developer Intern Assignment**.

---

## 🚀 Tech Stack

- **NestJS** (TypeScript)
- **PostgreSQL**
- **Prisma ORM**
- **JWT Authentication**
- **bcrypt** (password hashing)
- **Swagger** (`@nestjs/swagger`)
- **class-validator & class-transformer**

---

## 📦 Features

### 🔐 Authentication
- User registration & login
- JWT-based authentication
- Password hashing with bcrypt
- Roles: `ADMIN`, `EMPLOYEE`

### 👥 Users (Admin Only)
- View all users
- View user by ID
- Update user role

### 🧑‍💼 Customers
- Create, read, update, delete customers
- Pagination support
- Role-based access:
  - ADMIN: full access
  - EMPLOYEE: read-only

### 📝 Tasks
- Tasks linked to customers
- Assigned to employees
- Status management (`PENDING`, `IN_PROGRESS`, `DONE`)
- Role-based rules for access and updates

---

## 📂 Project Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Disha-Agarwal-09/Mini-crm-backend.git
cd mini-crm-backend