import Link from 'next/link';
import { Suspense } from 'react';
import MealsGrid from '@/components/meals/meals-grid';
import { getMeals } from '@/lib/meals';
import classes from './page.module.css';
import MealsLoadingPage from './loading-out';

async function Meals() {
    const meals = await getMeals();

    return (
        <MealsGrid meals={meals} />
    )
}

export default async function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>Delicious meals, created <span className={classes.highlight}>by you</span></h1>
                <p>Choose your favorite recipe and cook it yourself, It's easy and fun!</p>
                <p className={classes.cta}><Link href="/meals/share">Share your favorite meal</Link></p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<MealsLoadingPage />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}