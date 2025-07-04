# Platform Structure

A brief overview of how the FlowAgent platform is organized, so you can quickly understand its main building blocks.

## When to Use
Read this page to get a high-level understanding of the platform’s structure before diving into specific features.

## How It Works
- **Sites:** The top-level container. Each company or department can have one or more sites. Sites hold company info, users, plugins, solutions, and general settings.
  - Example: A company with two independent departments might have two separate sites.
- **Modules:** Like folders or database tables, modules store items (data records) such as customers, orders, or time registrations.
  - Example: The “Customers” module stores all customer records; the “Orders” module stores orders.
- **Dashboards:** The starting point for users. Dashboards display key information and workflows relevant to the user’s role.

## Usage Example
**Site/Module Analogy:**
- If you know databases: Sites = databases, Modules = tables, Items = rows.
- If you know file systems: Sites = root folders, Modules = subfolders, Items = files.