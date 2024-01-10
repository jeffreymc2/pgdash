"use server";  

import { createSupabaseAdmin, createSupbaseServerClient } from "@/lib/supabase";
import { unstable_noStore } from "next/cache";
// Removed unused import: import { emit } from "process";

export async function createMember(data: {
    email: string;
    password: string;
    name: string;
    role: "user" | "admin";
    status: "active" | "resigned";
    confirm: string;  // The 'confirm' field is not used in this function.
}) {
    const supabase = await createSupabaseAdmin();

    // Create Account
    const createResult = await supabase.auth.admin.createUser({
        email: data.email,
        password: data.password,
        email_confirm: true,  // This option might not be correct. Please verify with Supabase documentation.
        user_metadata: {
            role: data.role
        }
    });

    // Check for errors in createResult
    if (createResult.error) {
        return JSON.stringify(createResult);
    } else {
        const memberResult = await supabase.from("member").insert({
            name: data.name,
            id: createResult.data.user?.id
        });

        // Check for errors in memberResult
        if (memberResult.error) {
            return JSON.stringify(memberResult);
        } else {
            const permissionResult = await supabase.from("permission").insert({
                role: data.role,
                member_id: createResult.data.user?.id,
                status: data.status
            });

            // Check for errors in permissionResult
                return JSON.stringify(permissionResult);
        }
    }

}

export async function updateMemberById(id: string) {
    console.log("update member");
}

export async function deleteMemberById(id: string) {
    console.log("delete member");
}

export async function readMembers() {

    unstable_noStore()
    
    const supabase = await createSupbaseServerClient()

    return await supabase.from("permission").select("*, member(*)");


}
