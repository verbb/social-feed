<?php
namespace verbb\socialfeed\gql\types\generators;

use verbb\socialfeed\gql\interfaces\SourceInterface;
use verbb\socialfeed\gql\types\SourceType;

use craft\gql\base\GeneratorInterface;
use craft\gql\GqlEntityRegistry;

class SourceGenerator implements GeneratorInterface
{
    // Static Methods
    // =========================================================================

    public static function generateTypes(mixed $context = null): array
    {
        $gqlTypes = [];

        $typeName = self::getName();
        $sourceFields = SourceInterface::getFieldDefinitions();

        $gqlTypes[$typeName] = GqlEntityRegistry::getEntity($typeName) ?: GqlEntityRegistry::createEntity($typeName, new SourceType([
            'name' => $typeName,
            'fields' => function() use ($sourceFields) {
                return $sourceFields;
            },
        ]));

        return $gqlTypes;
    }

    public static function getName($context = null): string
    {
        return 'SourceType';
    }
}
