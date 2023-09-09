drop policy "Authenticated users can insert their own todos" on "public"."todos";

create policy "Authenticated users can update todos"
on "public"."todos"
as permissive
for update
to authenticated
using ((auth.uid() = user_id))
with check ((auth.uid() = user_id));



