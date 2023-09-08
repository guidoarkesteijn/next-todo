create policy "Authenticated users can delete todos"
on "public"."todos"
as permissive
for delete
to public
using ((auth.uid() = user_id));


create policy "Authenticated users can insert todos"
on "public"."todos"
as permissive
for insert
to authenticated
with check (true);



