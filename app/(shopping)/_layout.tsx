
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="characterDetails" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}


/*
<Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, false), // show header
        tabBarShowLabel: false,
        tabBarItemStyle: {
          backgroundColor: 'red',
          width: '10%'
        }

      }}>

<Tabs.Screen
        name="index"
        options={{

          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),

        }}
      />
      
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />

    </Tabs>
*/