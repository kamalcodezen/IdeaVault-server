# IdeaVault
Better-Auth and JWKS powered creative idea exchange engine with automated email notification pipeline.

---

## 1. Project Title & Tagline
**IdeaVault:** a full-stack asynchronous idea collaboration suite built as an Express.js monolith.

---

## 2. Problem Statement
Creative brainstorming and feature tracking are usually fragmented across multiple tools or unmonitored threads. This increases coordination blindspots and weakens interaction loops when connecting user ideas to authenticated sessions without complex setups.

IdeaVault targets developers and creators looking for a streamlined tech community by providing one platform for:
* **Practice:** Sharing concepts + gathering thoughts.
* **Improvement:** Peer reviews + nested comments feedback.
* **Direction:** Directory search + category filtered browsing.

---

## 3. Solution
IdeaVault combines interactive frontend workflows with backend API routes backed by MongoDB, remote JWKS cryptographic verification, and transactional email services.

At a high level:
* Users authenticate with credentials/OAuth via Better-Auth.
* The app validates incoming headers dynamically using a remote JWKS engine.
* Endpoints process full CRUD pipelines for managing ideas and nested user comments.
* Nodemailer handles non-blocking asynchronous registration welcome emails.
* Database client enforces stable API rules to isolate dynamic artifact mutations.

---

## 4. Key Features
* **Remote JWKS Semantic Bearer Token Validation Middleware:** Secures routes dynamically by checking cryptographic keys over remote network scopes.
* **Automated Transactional HTML Welcome Email Delivery Pipeline:** Non-blocking asynchronous message dispatch layer built using stable SMTP transports.
* **Case-Insensitive Title Search via MongoDB Regex Query Aggregator:** Dynamic text pipeline using localized indexing configurations (`$regex` with `$options: "i"`).
* **Dynamic Nested Feedback Module:** Supports the complete comment lifecycle (Create, Read, Update, Delete) mapped to parent models.
* **Strict Relational Tracking Inside Document Collections:** Utilizes standardized hexadecimal validation layers keyed by unique database identifiers (`ObjectId`).
* **Hybrid Workflow Structure:** Manages credential validation securely across custom isolated cross-origin deployment configurations.

---

## 5. Tech Stack
* **Frontend:** Next.js, React, Tailwind CSS (Client Application Environment).
* **Backend:** Express.js Monolithic API Engine.
* **Datastores:** MongoDB via Native Driver Client Core Wrapper.
* **Authentication:** Better-Auth Engine Integration with Jose-Cjs cryptographic runtime.
* **Communications:** Nodemailer SMTP Transporter Engine.

---

## 6. System Architecture
* High-Level System
* Backend Component View
* Email Processing Pipeline
* JWKS Verification Layer

---

## 7. Core Pipelines

### Verification Pipeline
1. User request posted with Authorization bearer string.
2. Token extracted and cross-referenced dynamically against remote endpoint URL.
3. Jose runtime evaluates token signatures using active remote public keys.
4. Validated user metadata is injected directly into `req.user` request context.
5. Downstream operations execute database actions safely with verified payload.

### Email Delivery Pipeline
1. Registration triggers inbound request to `/api/email-send`.
2. Payload matrix parses explicit name and target email variables.
3. Nodemailer SMTP transport channel initiates with isolated credential flags.
4. Custom inline-styled HTML templates assemble string bindings.
5. Asynchronous transporter pushes mail payload without freezing main runtime thread.

### Comment Management Pipeline
1. Client triggers specific entity mutations using hexadecimal target boundaries.
2. Comments are stored in MongoDB sub-collections mapped securely to `ideaId` references.
3. Update and delete operations fire isolated overrides via atomic operations (`$set`).

---

## 8. Project Structure
```text
IdeaVault-server/
  ├── index.js          # Core Monolithic Kernel, custom route bindings, and middleware architecture
  ├── package.json      # Dependency manifest and external package target mappings
  └── .env              # Environment protection layer isolating live credential variables

  ```
  
  ## 9. How the System Works
* Every transmission lifecycle starts by invoking the global operational tracking matrix configuration inside `index.js`.
* Safe routing scopes handle database lookups via an established MongoClient instance set up with v1 Stable API parameters.
* Protected routing nodes isolate data modifications by checking bearer data strings against remote verification boundaries before enabling write states.
* Database operations query specific sub-collections using precise hexadecimal wrappers to safely process entries.
* Independent notification handlers accept target payloads, map styling arrays to data blocks, and hand off data execution tasks to transactional email gateways.