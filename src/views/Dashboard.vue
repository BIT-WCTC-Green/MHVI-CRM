<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col></v-col>
                <v-col>
                    <h1>MHVI-CRM</h1>
                    <h2>Home</h2>
                </v-col>
                <v-col></v-col>
            </v-row>
            <v-row>
                <v-col>
                    <div>User: -PlaceHolderName-</div>
                </v-col>
                <v-col></v-col>
                <v-col>
                    <v-btn>Reports</v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col><div>Last Name:</div></v-col>
                <v-col>
                    <v-text-field clearable></v-text-field>
                </v-col>
                <v-col>
                    <v-col><v-btn>Add/Search</v-btn></v-col>
                </v-col>
            </v-row>
            <v-row>
                <v-col></v-col>
                <v-col>
                    <v-data-table>

                    </v-data-table>
                </v-col>
                <v-col></v-col>

            </v-row>
            <div>

            </div>
            <v-table></v-table>
        </v-container>
    </v-main>

</template>

<script>
    export default {
        name: "Dashboard"
    }
</script>

<style scoped>

</style>