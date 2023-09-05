drop policy "Authenticated users can select todos" on "public"."todos";

create policy "Authenticated users can select todos"
on "public"."todos"
as permissive
for select
to authenticated
using ((user_id = auth.uid()));



