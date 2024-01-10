/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vyrybefhmqnaxzfijbpl.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/**',
            },
            // ... any other remote patterns
        ],
    },
    // ... any other config
};

module.exports = nextConfig
