<template>
    <v-app id="inspire">

        <!----------------------------Header---------------------------->
        <v-app-bar
                app
                color="blue darken-2"
                flat
        >
            <v-container class="py-0 fill-height"


            >
                <v-card>
                    <v-img alt="logo" src="../assets/logo.png"
                           max-width="100px"

                    >
                    </v-img>
                </v-card>

                    <v-btn
                            class="ms-5"
                            elevation="2"
                            rounded
                            v-for="link in links"
                            :key="link"

                    >
                        {{ link }}
                    </v-btn>

                <v-spacer></v-spacer>

<!--                for the user logout-->
                <v-btn
                        elevation="2"
                        rounded
                >Logout</v-btn>

            </v-container>
        </v-app-bar>
        <!----------------------------End of Header---------------------------->

        <!----------------------------Body---------------------------->
        <v-main class="grey lighten-3">
            <v-container>
                <v-row>
                    <v-col>
                        <v-sheet
                                min-height="70vh"
                                rounded="lg"
                        >
                            <router-view>

                            </router-view>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <!----------------------------End of Body---------------------------->

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