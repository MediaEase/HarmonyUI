<?php

declare(strict_types=1);

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

final class AppFixtures extends Fixture
{
    public function load(ObjectManager $objectManager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $objectManager->flush();
    }
}
