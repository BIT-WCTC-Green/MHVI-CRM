<template>
    <v-app id="inspire">
        <v-app-bar
                app
                color="white"
                flat
        >
            <v-container class="py-0 fill-height">

<!--                <v-card>-->
                    <v-img alt="logo" src="../assets/logo.png"
                           max-width="100px"

                    >
                    </v-img>
<!--                </v-card>-->


                <v-btn
                        v-for="link in links"
                        :key="link"
                        text
                >
                    {{ link }}
                </v-btn>

                <v-spacer></v-spacer>

            </v-container>
        </v-app-bar>

        <v-main class="grey lighten-3">
            <v-container>
                <v-row>

                    <v-col>
                        <v-sheet
                                min-height="70vh"
                                rounded="lg"
                        >

                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            links: [
                'Dashboard',
                'Clients',
                'Reports',
            ],
        }),
    }
</script>