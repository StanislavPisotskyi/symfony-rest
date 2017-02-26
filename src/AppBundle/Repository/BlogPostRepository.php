<?php

namespace AppBundle\Repository;

use Doctrine\ORM\EntityRepository;

class BlogPostRepository extends EntityRepository
{
    public function findOneById(int $id)
    {
        $query = $this->_em->createQuery(
            "
            SELECT bp
            FROM AppBundle:BlogPost bp
            WHERE bp.id = :id
            "
        );

        $query->setParameter('id', $id);

        return $query;
    }
}