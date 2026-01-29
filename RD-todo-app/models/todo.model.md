### V1 Todo Schema
```bash
create table todos (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  is_completed boolean default false,
  user_id uuid references users(id) on delete cascade,
  created_at timestamp default now()
);
```